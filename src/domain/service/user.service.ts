import { Users } from '@infrastructures/io/entity';
import { IAuthUser } from '@shares/type/base.interface';
import { IListUserServiceQuery, IListUserServiceResponse } from '@shares/type/user.interface';

export const USER_SERVICE = 'USER_SERVICE';

export interface IUserService {
  getListUsers(query: IListUserServiceQuery): Promise<IListUserServiceResponse>;
  syncAuthenticated(dto: IAuthUser): Promise<Users>;
}
