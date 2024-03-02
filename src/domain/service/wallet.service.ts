import { Wallets } from '@infrastructures/io/entity';
import {
  ICreateWalletServiceCommand,
  IListWalletServiceQuery,
  IListWalletServiceResponse,
  IUpdateWalletServiceCommand
} from '@shares/wallet.interface';

export const WALLET_SERVICE = 'WALLET_SERVICE';
export interface IWalletService {
  createWallet(data: ICreateWalletServiceCommand): Promise<Wallets>;
  updateWallet(data: IUpdateWalletServiceCommand): Promise<Wallets>;
  getDetailWallet(params: { uuid: string }): Promise<Wallets>;
  listWallets(query: IListWalletServiceQuery): Promise<IListWalletServiceResponse>;
}
