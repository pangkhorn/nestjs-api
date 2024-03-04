import { IWalletRepository, WALLET_REPOSITORY } from '@adaptors/repository';
import { Wallets } from '@infrastructures/io/entity';
import { Inject, Injectable } from '@nestjs/common';
import {
  IAddWalletHolderService,
  ICreateWalletService,
  IListWalletServiceQuery,
  IListWalletServiceResponse,
  IUpdateWalletService
} from '@shares/wallet.interface';
import { IWalletService } from '../wallet.service';
import { BaseService } from './base.service';

@Injectable()
export class WalletService extends BaseService implements IWalletService {
  constructor(@Inject(WALLET_REPOSITORY) private readonly walletRepo: IWalletRepository) {
    super(WalletService.name);
  }
  addWalletHolder(dto: IAddWalletHolderService): Promise<Wallets> {
    return this.walletRepo.addWalletHolder(dto);
  }
  getDetailWallet(params: { uuid: string }): Promise<Wallets> {
    return this.walletRepo.getDetailWallet(params);
  }
  updateWallet(data: IUpdateWalletService): Promise<Wallets> {
    return this.walletRepo.updateWallet(data);
  }
  listWallets(query: IListWalletServiceQuery): Promise<IListWalletServiceResponse> {
    return this.walletRepo.listWallets(query);
  }
  createWallet(walletServiceCommand: ICreateWalletService): Promise<Wallets> {
    return this.walletRepo.createWallet(walletServiceCommand);
  }
}
