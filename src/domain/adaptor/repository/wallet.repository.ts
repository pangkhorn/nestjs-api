import { Wallets } from '@infrastructures/io/entity';
import {
  IAddWalletHolderRepo,
  ICreateWalletRepoCommand,
  IListWalletRepoQuery,
  IUpdateWalletRepoCommand
} from '@shares/wallet.interface';
import { Repository } from 'typeorm';

export const WALLET_REPOSITORY = 'WALLET_REPOSITORY';
export interface IWalletRepository extends Repository<Wallets> {
  createWallet(walletData: ICreateWalletRepoCommand): Promise<Wallets>;
  addWalletHolder(data: IAddWalletHolderRepo): Promise<Wallets>;
  getDetailWallet(params: { uuid: string }): Promise<Wallets>;
  updateWallet(walletData: IUpdateWalletRepoCommand): Promise<Wallets>;
  listWallets(query: IListWalletRepoQuery): Promise<{ wallets: Wallets[]; page: number; size: number; total: number }>;
}
