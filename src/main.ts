import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { useContainer } from 'class-validator';
import * as compression from 'compression';
import helmet from 'helmet';
import * as MethodOverride from 'method-override';
import { join } from 'path';
import { AppModule } from './app.module';
import { factory } from './utility';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.use(helmet());
  const origins = ['https://connect.ababank.com', 'https://recruitment-connect.ababank.com'];
  if (process.env.NODE_ENV !== 'production') {
    origins.push(
      'http://localhost',
      'http://localhost:4200',
      'http://localhost:8082',
      'https://dev-hrms.ababank.com:9004',
      'https://uat-hrms.ababank.com:9004',
      'https://recruitment-connect-uat.ababank.com'
    );
  }
  app.enableCors({
    credentials: true,
    origin: origins,
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH'],
    preflightContinue: false
  });

  app.use(MethodOverride('X-HTTP-Method-Override'));
  app.use(compression());

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, exceptionFactory: factory }));

  // Enable DI for class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(parseInt(process.env.PORT, 10) || 3000);
  const logger = new Logger('Recruitment');
  const appUrl = await app.getUrl();
  logger.debug('Service is running on : ' + appUrl);
}
bootstrap();
