import { Wallets } from '@infrastructures/io/entity';
import { ICreateWalletServiceCommand, IListWalletServiceResponse, IWalletServiceQuery } from '@shares/wallet.interface';

export const WALLET_SERVICE = 'WALLET_SERVICE';
export interface IWalletService {
  createdWallet(walletServiceCommand: ICreateWalletServiceCommand): Promise<Wallets>;
  listWallets(query: IWalletServiceQuery): Promise<IListWalletServiceResponse>;
}
