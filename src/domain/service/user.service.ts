export const USER_SERVICE = 'USER_SERVICE';

export interface IUserService {
  getListUsers(query: any): Promise<any[]>;
}
