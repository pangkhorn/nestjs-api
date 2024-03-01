import { USERS_REPOSITORY } from '@adaptors/repository';
import { Provider } from '@nestjs/common';

import { UsersRepository } from './repository';

export const commonsIo: Provider[] = [
  {
    provide: USERS_REPOSITORY,
    useClass: UsersRepository
  }
];
