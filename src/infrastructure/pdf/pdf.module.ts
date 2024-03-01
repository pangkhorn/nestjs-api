import { PDF_SERVICE } from '@adaptors/service';
import { Module } from '@nestjs/common';
import { PDFService } from './pdf.service';

@Module({
  providers: [
    {
      provide: PDF_SERVICE,
      useClass: PDFService
    }
  ],
  exports: [
    {
      provide: PDF_SERVICE,
      useClass: PDFService
    }
  ]
})
export class PDFModule {}
