import { IUserRepository, USERS_REPOSITORY } from '@adaptors/repository';
import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../user.service';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}
  getListUsers(query: any): Promise<any[]> {
    return this.userRepository.findUsers(query);
  }
}
