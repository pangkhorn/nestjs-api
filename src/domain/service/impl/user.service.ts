import { IUserRepository, USERS_REPOSITORY } from '@adaptors/repository';
import { Inject, Injectable } from '@nestjs/common';
import { IListUserServiceQuery, IListUserServiceResponse } from '@shares/user.interface';
import { IUserService } from '../user.service';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}
  getListUsers(query: IListUserServiceQuery): Promise<IListUserServiceResponse> {
    return this.userRepository.findUsers(query);
  }
}
