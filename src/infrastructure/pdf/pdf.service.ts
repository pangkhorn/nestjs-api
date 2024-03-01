import { IPDFService } from '@adaptors/service';
import { Injectable } from '@nestjs/common';
import puppeteer, { PDFOptions } from 'puppeteer';

@Injectable()
export class PDFService implements IPDFService {
  async export(contentHtml: string, options?: PDFOptions): Promise<Buffer> {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setContent(contentHtml, { waitUntil: 'networkidle0', timeout: 30000 });
    const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        left: '14px',
        top: '14px',
        right: '14px',
        bottom: '14px',
      },
      ...options,
    });
    await browser.close();
    return buffer;
  }
}
