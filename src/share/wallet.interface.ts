import { CurrencyEnum } from '@constants/enum';
import { Wallets } from '@infrastructures/io/entity';

export interface ICreateWalletServiceCommand {
  name: string;
  description?: string;
  currency: CurrencyEnum;
  balance?: number;
}

export interface IWalletServiceQuery {
  page?: number;
  size?: number;
  sort: string;
  keyword?: string;
}

export type ICreateWalletRepoCommand = ICreateWalletServiceCommand;
export type IWalletRepoQuery = IWalletServiceQuery;

export interface IListWalletServiceResponse {
  wallets: Wallets[];
  page: number;
  size: number;
  total: number;
}

export type IListWalletRepoResponse = IListWalletServiceResponse;
