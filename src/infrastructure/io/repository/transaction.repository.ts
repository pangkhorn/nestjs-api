import { ITransactionRepository } from '@adaptors/repository';
import { TransactionTypeEnum } from '@constants/enum';
import { X } from '@constants/index';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ICreateTransactionRepo } from '@shares/transaction.interface';
import { DataSource, Repository } from 'typeorm';
import { Transactions, Users, Wallets } from '../entity';

@Injectable()
export class TransactionRepository extends Repository<Transactions> implements ITransactionRepository {
  constructor(private readonly dataSource: DataSource) {
    super(Transactions, dataSource.createEntityManager());
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
      console.log('wallets===', wallet);
      console.log('user===', user);
      const transaction = await trx.save(Transactions, {
        amount,
        currency: wallet.currency,
        createdBy: user.id,
        remark,
        type,
        walletId: wallet.id
      });
      console.log('transaction===', transaction);
      if (type === TransactionTypeEnum.DEPOSIT) {
        await trx.increment(Wallets, { id: wallet.id }, 'balance', amount);
      } else {
        await trx.decrement(Wallets, { id: wallet.id }, 'balance', amount);
      }
      return transaction;
    });
  }
}
