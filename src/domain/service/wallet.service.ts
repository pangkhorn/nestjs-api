import { Wallets } from '@infrastructures/io/entity';
import {
  IAddWalletHolderService,
  ICreateWalletService,
  IListWalletServiceQuery,
  IListWalletServiceResponse,
  IUpdateWalletService
} from '@shares/wallet.interface';

export const WALLET_SERVICE = 'WALLET_SERVICE';
export interface IWalletService {
  addWalletHolder(dto: IAddWalletHolderService): Promise<Wallets>;
  createWallet(data: ICreateWalletService): Promise<Wallets>;
  updateWallet(data: IUpdateWalletService): Promise<Wallets>;
  getDetailWallet(params: { uuid: string }): Promise<Wallets>;
  listWallets(query: IListWalletServiceQuery): Promise<IListWalletServiceResponse>;
}
