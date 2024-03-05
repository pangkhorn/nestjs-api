import { ITransactionService, TRANSACTION_SERVICE } from '@domains/service';
import { CreatedTransactionDto, ListTransactionDto } from '@dtos/transaction.dto';
import { Body, Controller, Get, HttpCode, Inject, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';

@ApiTags('Transactions')
@Controller({ path: 'transactions' })
export class TransactionController {
  constructor(@Inject(TRANSACTION_SERVICE) private readonly transactionService: ITransactionService) {}

  @Get()
  async listTransactions(@Query() query: ListTransactionDto) {
    return { transactions: await this.transactionService.listTransactions(query) };
  }

  @Post()
  @HttpCode(HttpStatusCode.Created)
  async createTransaction(@Body() dto: CreatedTransactionDto) {
    const transaction = await this.transactionService.createTransaction(dto);
    return { transactions: { transaction } };
  }
}
