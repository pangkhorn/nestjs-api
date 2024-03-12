import { ITransactionService, TRANSACTION_SERVICE } from '@domains/service';
import { CreatedTransactionDto, ListTransactionDto } from '@dtos/transaction.dto';
import { Body, Controller, Get, HttpCode, Inject, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IAuthUser } from '@shares/type/base.interface';
import { HttpStatusCode } from 'axios';
import { AuthenticatedUser } from 'nest-keycloak-connect';

@ApiTags('Transactions')
@ApiBearerAuth()
@Controller({ path: 'transactions' })
export class TransactionController {
  constructor(@Inject(TRANSACTION_SERVICE) private readonly transactionService: ITransactionService) {}

  @Get()
  async listTransactions(@Query() query: ListTransactionDto, @AuthenticatedUser() user: IAuthUser) {
    return { transactions: await this.transactionService.listTransactions({ ...query, userUuid: user.userUuid }) };
  }

  @Post()
  @HttpCode(HttpStatusCode.Created)
  async createTransaction(@Body() dto: CreatedTransactionDto, @AuthenticatedUser() user: IAuthUser) {
    const transaction = await this.transactionService.createTransaction({ ...dto, userUuid: user.userUuid });
    return { transactions: { transaction } };
  }
}
