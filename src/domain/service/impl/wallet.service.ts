import { IWalletRepository, WALLET_REPOSITORY } from '@adaptors/repository';
import { Wallets } from '@infrastructures/io/entity';
import { Inject, Injectable } from '@nestjs/common';
import {
  ICreateWalletServiceCommand,
  IListWalletServiceQuery,
  IListWalletServiceResponse,
  IUpdateWalletServiceCommand
} from '@shares/wallet.interface';
import { IWalletService } from '../wallet.service';
import { BaseService } from './base.service';

@Injectable()
export class WalletService extends BaseService implements IWalletService {
  constructor(@Inject(WALLET_REPOSITORY) private readonly walletRepo: IWalletRepository) {
    super(WalletService.name);
  }
  getDetailWallet(params: { uuid: string }): Promise<Wallets> {
    return this.walletRepo.getDetailWallet(params);
  }
  updateWallet(data: IUpdateWalletServiceCommand): Promise<Wallets> {
    return this.walletRepo.updateWallet(data);
  }
  listWallets(query: IListWalletServiceQuery): Promise<IListWalletServiceResponse> {
    return this.walletRepo.listWallets(query);
  }
  createWallet(walletServiceCommand: ICreateWalletServiceCommand): Promise<Wallets> {
    return this.walletRepo.createWallet(walletServiceCommand);
  }
}
