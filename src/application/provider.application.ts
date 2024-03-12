import { Provider } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AuthGuard, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { ErrorExceptionFilter, HttpExceptionFilter } from './exception/filter';
import { BadRequestExceptionFilter } from './exception/filter/bad-request.filter';
import { AuthSyncGuard } from './guard';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { QueryInterceptor } from './interceptor/query.interceptor';
import { RequestIdInterceptor } from './interceptor/request-id.interceptor';

export const providers: Provider[] = [
  {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  },
  {
    provide: APP_GUARD,
    useClass: AuthGuard
  },
  {
    provide: APP_GUARD,
    useClass: ResourceGuard
  },
  {
    provide: APP_GUARD,
    useClass: RoleGuard
  },
  {
    provide: APP_GUARD,
    useClass: AuthSyncGuard
  },
  {
    provide: APP_FILTER,
    useClass: ErrorExceptionFilter
  },
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter
  },
  {
    provide: APP_FILTER,
    useClass: BadRequestExceptionFilter
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: QueryInterceptor
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: RequestIdInterceptor
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor
  }
];
