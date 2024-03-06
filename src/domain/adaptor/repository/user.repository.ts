import { Users } from '@infrastructures/io/entity';
import { IListUserRepoQuery, IListUserRepoResponse } from '@shares/type/user.interface';
import { Repository } from 'typeorm';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';
export interface IUserRepository extends Repository<Users> {
  findUsers(query: IListUserRepoQuery): Promise<IListUserRepoResponse>;
}
