import { Users } from '@infrastructures/io/entity';
import { Repository } from 'typeorm';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';
export interface IUserRepository extends Repository<Users> {
  findUsers(query: any): Promise<any[]>;
}
