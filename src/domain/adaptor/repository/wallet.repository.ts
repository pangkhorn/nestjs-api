import { Wallets } from '@infrastructures/io/entity';
import { ICreateWalletRepoCommand, IWalletRepoQuery } from '@shares/wallet.interface';
import { Repository } from 'typeorm';

export const WALLET_REPOSITORY = 'WALLET_REPOSITORY';
export interface IWalletRepository extends Repository<Wallets> {
  createWallet(walletData: ICreateWalletRepoCommand): Promise<Wallets>;
  listWallets(query: IWalletRepoQuery): Promise<{ wallets: Wallets[]; page: number; size: number; total: number }>;
}
