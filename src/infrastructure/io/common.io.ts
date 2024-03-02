import { USERS_REPOSITORY, WALLET_REPOSITORY } from '@adaptors/repository';
import { Provider } from '@nestjs/common';

import { UsersRepository, WalletRepository } from './repository';

export const commonsIo: Provider[] = [
  {
    provide: USERS_REPOSITORY,
    useClass: UsersRepository
  },
  {
    provide: WALLET_REPOSITORY,
    useClass: WalletRepository
  }
];
