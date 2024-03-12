import { Users } from '@infrastructures/io/entity';
import { IAuthUser } from '@shares/type/base.interface';
import { IListUserRepoQuery, IListUserRepoResponse } from '@shares/type/user.interface';
import { Repository } from 'typeorm';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';
export interface IUserRepository extends Repository<Users> {
  findUsers(query: IListUserRepoQuery): Promise<IListUserRepoResponse>;
  syncAuthenticated(dto: IAuthUser): Promise<Users>;
}
