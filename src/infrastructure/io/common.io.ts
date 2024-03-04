import { TRANSACTION_REPOSITORY, USERS_REPOSITORY, WALLET_REPOSITORY } from '@adaptors/repository';
import { Provider } from '@nestjs/common';

import { UserSeed } from '@seeds/user.seed';
import { TransactionRepository, UsersRepository, WalletRepository } from './repository';

export const commonsIo: Provider[] = [
  {
    provide: USERS_REPOSITORY,
    useClass: UsersRepository
  },
  {
    provide: WALLET_REPOSITORY,
    useClass: WalletRepository
  },
  {
    provide: TRANSACTION_REPOSITORY,
    useClass: TransactionRepository
  },
  UserSeed
];
