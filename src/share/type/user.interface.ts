import { Users } from '@infrastructures/io/entity';

export interface IListUserServiceQuery {
  page?: number;
  size?: number;
  sort?: string;
  keyword?: string;
}

export type IListUserRepoQuery = IListUserServiceQuery;

export interface IListUserServiceResponse {
  users: Users[];
  page: number;
  size: number;
  total: number;
}

export type IListUserRepoResponse = IListUserServiceResponse;
