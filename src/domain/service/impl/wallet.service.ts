import { IWalletRepository, WALLET_REPOSITORY } from '@adaptors/repository';
import { Wallets } from '@infrastructures/io/entity';
import { Inject, Injectable } from '@nestjs/common';
import { ICreateWalletServiceCommand, IListWalletServiceResponse, IWalletServiceQuery } from '@shares/wallet.interface';
import { IWalletService } from '../wallet.service';
import { BaseService } from './base.service';

@Injectable()
export class WalletService extends BaseService implements IWalletService {
  constructor(@Inject(WALLET_REPOSITORY) private readonly walletRepo: IWalletRepository) {
    super(WalletService.name);
  }
  listWallets(query: IWalletServiceQuery): Promise<IListWalletServiceResponse> {
    return this.walletRepo.listWallets(query);
  }
  createdWallet(walletServiceCommand: ICreateWalletServiceCommand): Promise<Wallets> {
    return this.walletRepo.createWallet(walletServiceCommand);
  }
}
