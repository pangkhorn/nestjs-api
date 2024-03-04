import { IListUserServiceQuery, IListUserServiceResponse } from '@shares/user.interface';

export const USER_SERVICE = 'USER_SERVICE';

export interface IUserService {
  getListUsers(query: IListUserServiceQuery): Promise<IListUserServiceResponse>;
}
