import { IUserRepository, USERS_REPOSITORY } from '@adaptors/repository';
import { Users } from '@infrastructures/io/entity';
import { Inject, Injectable } from '@nestjs/common';
import { IAuthUser } from '@shares/type/base.interface';
import { IListUserServiceQuery, IListUserServiceResponse } from '@shares/type/user.interface';
import { IUserService } from '../user.service';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}
  syncAuthenticated(dto: IAuthUser): Promise<Users> {
    return this.userRepository.syncAuthenticated(dto);
  }
  getListUsers(query: IListUserServiceQuery): Promise<IListUserServiceResponse> {
    return this.userRepository.findUsers(query);
  }
}
