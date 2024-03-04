import { CurrencyEnum } from '@constants/enum';
import { Wallets } from '@infrastructures/io/entity';

export interface ICreateWalletService {
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

export interface IUpdateWalletService {
  uuid: string;
  name?: string;
  description?: string;
}

export type IUpdateWalletRepoCommand = IUpdateWalletService;

export type ICreateWalletRepoCommand = ICreateWalletService;
export type IListWalletRepoQuery = IListWalletServiceQuery;

export interface IListWalletServiceResponse {
  wallets: Wallets[];
  page: number;
  size: number;
  total: number;
}

export type IListWalletRepoResponse = IListWalletServiceResponse;

export interface IAddWalletHolderService {
  walletUuid: string;
  userUuid: string;
}

export interface IAddWalletHolderRepo extends IAddWalletHolderService {}
