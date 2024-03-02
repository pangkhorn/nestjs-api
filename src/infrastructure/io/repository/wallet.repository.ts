import { IWalletRepository } from '@adaptors/repository';
import { Injectable } from '@nestjs/common';
import { ICreateWalletServiceCommand, IListWalletRepoResponse, IWalletServiceQuery } from '@shares/wallet.interface';
import { fromOrder, fromPaginate } from '@utilities/paginate.utility';
import { DataSource, ILike, Repository } from 'typeorm';
import { Wallets } from '../entity';

@Injectable()
export class WalletRepository extends Repository<Wallets> implements IWalletRepository {
  constructor(private readonly dataSource: DataSource) {
    super(Wallets, dataSource.createEntityManager());
  }
  async listWallets(query: IWalletServiceQuery): Promise<IListWalletRepoResponse> {
    const { orderBy, sortBy } = fromOrder(query.sort, {
      defaultOrder: 'DESC',
      defaultSort: 'createdAt',
      allowFieldSorts: ['createdAt', 'updatedAt', 'name', 'balance']
    });
    const { skip, take, page, size } = fromPaginate({ page: query.page, size: query.size });

    const filterName = query.keyword ? { name: ILike(`%${query.keyword}%`) } : {};
    const [wallets, total] = await this.findAndCount({
      where: { ...filterName },
      take,
      skip,
      order: { [sortBy]: orderBy }
    });
    return {
      page,
      size,
      wallets,
      total
    };
  }
  async createWallet(walletData: ICreateWalletServiceCommand): Promise<Wallets> {
    const wallet = new Wallets();
    wallet.name = walletData.name;
    wallet.description = walletData.description;
    wallet.currency = walletData.currency;
    wallet.balance = walletData.balance;
    return this.save(wallet);
  }
}
