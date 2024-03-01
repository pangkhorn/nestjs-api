import cacheConfig from '@configs/cache.config';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CachingModule } from './caching/caching.module';
import { IOModule } from './io/io.module';
import { PDFModule } from './pdf/pdf.module';

@Module({
  imports: [
    IOModule,
    PDFModule,
    CachingModule.config({
      imports: [ConfigModule.forFeature(cacheConfig('cache'))],
      useFactory: (config: ConfigService) => config.get('cache'),
      inject: [ConfigService],
    }),
  ],
  exports: [IOModule, CachingModule, PDFModule],
})
export class InfrastructureModule {}
