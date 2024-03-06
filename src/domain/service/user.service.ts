import { IListUserServiceQuery, IListUserServiceResponse } from '@shares/type/user.interface';

export const USER_SERVICE = 'USER_SERVICE';

export interface IUserService {
  getListUsers(query: IListUserServiceQuery): Promise<IListUserServiceResponse>;
}
