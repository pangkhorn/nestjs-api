import { Users } from '@infrastructures/io/entity';
import { IAuthUser } from './base.interface';

export interface IListUserServiceQuery {
  page?: number;
  size?: number;
  sort?: string;
  keyword?: string;
  user: IAuthUser;
}

export type IListUserRepoQuery = IListUserServiceQuery;

export interface IListUserServiceResponse {
  users: Users[];
  page: number;
  size: number;
  total: number;
}

export type IListUserRepoResponse = IListUserServiceResponse;
