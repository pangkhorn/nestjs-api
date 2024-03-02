import { Provider } from '@nestjs/common';
import { USER_SERVICE, WALLET_SERVICE } from './service';
import { UserService, WalletService } from './service/impl';

export const commonsDomain: Provider[] = [
  { provide: USER_SERVICE, useClass: UserService },
  { provide: WALLET_SERVICE, useClass: WalletService }
];
