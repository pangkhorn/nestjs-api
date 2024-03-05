import { ITransactionRepository } from '@adaptors/repository';
import { TransactionTypeEnum } from '@constants/enum';
import { X } from '@constants/index';
import { BadRequestException, Injectable } from '@nestjs/common';
import {
  ICreateTransactionRepo,
  IListTransactionRepoQuery,
  IListTransactionRepoResponse
} from '@shares/transaction.interface';
import { fromOrder, fromPaginate } from '@utilities/paginate.utility';
import { DataSource, FindOptionsWhereProperty, Repository } from 'typeorm';
import { Transactions, Users, Wallets } from '../entity';

@Injectable()
export class TransactionRepository extends Repository<Transactions> implements ITransactionRepository {
  constructor(private readonly dataSource: DataSource) {
    super(Transactions, dataSource.createEntityManager());
  }
  async listTransactions(query: IListTransactionRepoQuery): Promise<IListTransactionRepoResponse> {
    const { orderBy, sortBy } = fromOrder(query.sort, {
      defaultOrder: 'DESC',
      defaultSort: 'updatedAt',
      allowFieldSorts: ['createdAt', 'updatedAt']
    });
    const { skip, take, page, size } = fromPaginate({ page: query.page, size: query.size });
    const filterByWallet: FindOptionsWhereProperty<Transactions> = query.walletUuid
      ? { wallet: { uuid: query.walletUuid } }
      : {};
    const filterByCreator: FindOptionsWhereProperty<Transactions> = query.userUuid
      ? { creator: { uuid: query.userUuid } }
      : {};
    const [transactions, total] = await this.findAndCount({
      where: { ...filterByWallet, ...filterByCreator },
      relations: { wallet: true, creator: true },
      take,
      skip,
      order: { [sortBy]: orderBy }
    });
    return {
      transactions,
      page,
      size,
      total
    };
  }
  async createTransaction(data: ICreateTransactionRepo): Promise<Transactions> {
    const { userUuid, walletUuid, amount, type, remark } = data;
    const [wallet, user] = await Promise.all([
      this.manager.findOne(Wallets, { where: { uuid: walletUuid, holders: { user: { uuid: userUuid } } } }),
      this.manager.findOne(Users, { where: { uuid: userUuid } })
    ]);

    if (!user) {
      throw new BadRequestException(X.USERS.NOT_FOUND);
    }
    if (!wallet) {
      throw new BadRequestException(X.WALLETS.NOT_FOUND);
    }

    return this.manager.transaction(async (trx) => {
      const transaction = await trx.save(Transactions, {
        amount,
        currency: wallet.currency,
        createdBy: user.id,
        remark,
        type,
        walletId: wallet.id
      });
      if (type === TransactionTypeEnum.DEPOSIT) {
        await Promise.all([
          trx.increment(Wallets, { id: wallet.id }, 'balance', amount),
          trx.increment(Wallets, { id: wallet.id }, 'income', amount)
        ]);
      } else {
        await Promise.all([
          trx.decrement(Wallets, { id: wallet.id }, 'balance', amount),
          trx.increment(Wallets, { id: wallet.id }, 'expense', amount)
        ]);
      }
      return transaction;
    });
  }
}
