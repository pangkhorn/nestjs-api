import { PDFOptions } from 'puppeteer';

export const PDF_SERVICE = 'PDF_SERVICE';

export interface IPDFService {
  /**
   * Export PDF from html string
   *
   * @param contentHtml: string
   */
  export(contentHtml: string, options?: PDFOptions): Promise<Buffer>;
}
