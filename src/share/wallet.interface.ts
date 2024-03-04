import { CurrencyEnum } from '@constants/enum';
import { Wallets } from '@infrastructures/io/entity';

export interface ICreateWalletServiceCommand {
  userUuid: string;
  name: string;
  description?: string;
  currency: CurrencyEnum;
  balance?: number;
}

export interface IListWalletServiceQuery {
  user?: string;
  page?: number;
  size?: number;
  sort?: string;
  keyword?: string;
}

export interface IUpdateWalletServiceCommand {
  uuid: string;
  name?: string;
  description?: string;
}

export type IUpdateWalletRepoCommand = IUpdateWalletServiceCommand;

export type ICreateWalletRepoCommand = ICreateWalletServiceCommand;
export type IListWalletRepoQuery = IListWalletServiceQuery;

export interface IListWalletServiceResponse {
  wallets: Wallets[];
  page: number;
  size: number;
  total: number;
}

export type IListWalletRepoResponse = IListWalletServiceResponse;
