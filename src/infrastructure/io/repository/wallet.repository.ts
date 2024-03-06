import { IWalletRepository } from '@adaptors/repository';
import { X } from '@constants/index';
import { BadRequestException, Injectable } from '@nestjs/common';
import {
  IAddWalletHolderRepo,
  ICreateWalletService,
  IListWalletRepoResponse,
  IListWalletServiceQuery,
  IUpdateWalletRepoCommand
} from '@shares/type/wallet.interface';
import { fromOrder, fromPaginate } from '@utilities/paginate.utility';
import { every, map } from 'lodash';
import { DataSource, FindOptionsWhere, ILike, Repository } from 'typeorm';
import { Users, WalletHolders, Wallets } from '../entity';

@Injectable()
export class WalletRepository extends Repository<Wallets> implements IWalletRepository {
  constructor(private readonly dataSource: DataSource) {
    super(Wallets, dataSource.createEntityManager());
  }
  async addWalletHolder(data: IAddWalletHolderRepo): Promise<Wallets> {
    const { userUuid, walletUuid } = data;
    const [wallet, user, existing] = await Promise.all([
      this.findOne({ where: { uuid: walletUuid } }),
      this.manager.findOne(Users, { where: { uuid: userUuid } }),
      this.manager.exists(WalletHolders, { where: { wallet: { uuid: walletUuid }, user: { uuid: userUuid } } })
    ]);

    if (!user) {
      throw new BadRequestException(X.USERS.NOT_FOUND);
    }
    if (!wallet) {
      throw new BadRequestException(X.WALLETS.NOT_FOUND);
    }
    if (existing) {
      throw new BadRequestException(X.USERS.EXISTING);
    }
    await this.manager.save(WalletHolders, { userId: user.id, walletId: wallet.id });
    return wallet;
  }
  getDetailWallet(params: { uuid: string }): Promise<Wallets> {
    return this.findOne({ where: { uuid: params.uuid } });
  }
  async updateWallet(walletData: IUpdateWalletRepoCommand): Promise<Wallets> {
    const { name, description, uuid } = walletData;
    const wallet = await this.findOne({ where: { uuid } });
    if (!wallet) {
      throw new BadRequestException(X.WALLETS.NOT_FOUND);
    }
    if (name) {
      wallet.name = name;
    }
    if (description || description === '') {
      wallet.description = description;
    }
    return this.save(wallet);
  }
  async listWallets(query: IListWalletServiceQuery): Promise<IListWalletRepoResponse> {
    const { orderBy, sortBy } = fromOrder(query.sort, {
      defaultOrder: 'DESC',
      defaultSort: 'createdAt',
      allowFieldSorts: ['createdAt', 'updatedAt', 'name', 'balance']
    });
    const { skip, take, page, size } = fromPaginate({ page: query.page, size: query.size });

    const filterName = query.keyword ? { name: ILike(`%${query.keyword}%`) } : {};
    const filterUser: FindOptionsWhere<Wallets> = query.user ? { holders: { user: { uuid: query.user } } } : {};
    const [wallets, total] = await this.findAndCount({
      select: { holders: { id: true, isOwner: true, userId: true } },
      where: { ...filterName, ...filterUser },
      relations: { holders: true },
      take,
      skip,
      order: { [sortBy]: orderBy }
    });
    return {
      page,
      size,
      wallets: map(wallets, (w) => {
        const isOwner = every(w.holders, { isOwner: true });
        delete w.holders;
        return { ...w, isOwner };
      }),
      total
    };
  }
  async createWallet(walletData: ICreateWalletService): Promise<Wallets> {
    const user = await this.manager.findOne(Users, { where: { uuid: walletData.userUuid } });
    if (!user) {
      throw new BadRequestException(X.USERS.NOT_FOUND);
    }

    return this.manager.transaction(async (trx) => {
      let wallet = new Wallets();
      wallet.name = walletData.name;
      wallet.description = walletData.description;
      wallet.currency = walletData.currency;
      wallet.balance = walletData.balance;
      wallet = await trx.save(wallet);
      await trx.save(WalletHolders, { isOwner: true, userId: user.id, walletId: wallet.id });
      return wallet;
    });
  }
}
