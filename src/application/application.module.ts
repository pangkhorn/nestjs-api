import { keycloakConfig } from '@configs/keycloak.config';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerModule } from '@nestjs/throttler';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';
import { DomainModule } from '../domain/domain.module';
import { controllers } from './controller.application';
import { providers } from './provider.application';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [
        {
          ttl: parseInt(config.get('RATE_LIMIT_TTL', '60')) * 1000,
          limit: parseInt(config.get('RATE_LIMIT_TTL', '60'))
        }
      ]
    }),
    EventEmitterModule.forRoot(),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '../i18n/'),
        watch: true
      },
      resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver]
    }),
    ConfigModule.forRoot({
      load: [keycloakConfig('keycloak')]
    }),
    KeycloakConnectModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('keycloak'),
      inject: [ConfigService]
    }),
    DomainModule
  ],
  controllers: controllers,
  providers: providers
})
export class ApplicationModule {}
