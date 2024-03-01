import { Provider } from '@nestjs/common';
import { USER_SERVICE } from './service';
import { UserService } from './service/impl';

export const commonsDomain: Provider[] = [{ provide: USER_SERVICE, useClass: UserService }];
