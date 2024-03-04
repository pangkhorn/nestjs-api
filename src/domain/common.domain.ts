import { Provider } from '@nestjs/common';
import { TRANSACTION_SERVICE, USER_SERVICE, WALLET_SERVICE } from './service';
import { TransactionService, UserService, WalletService } from './service/impl';

export const commonsDomain: Provider[] = [
  { provide: USER_SERVICE, useClass: UserService },
  { provide: WALLET_SERVICE, useClass: WalletService },
  { provide: TRANSACTION_SERVICE, useClass: TransactionService }
];
