import { ITransactionRepository, TRANSACTION_REPOSITORY } from '@adaptors/repository';
import { Transactions } from '@infrastructures/io/entity';
import { Inject, Injectable } from '@nestjs/common';
import { ICreateTransactionService } from '@shares/transaction.interface';
import { ITransactionService } from '../transaction.service';
import { BaseService } from './base.service';

@Injectable()
export class TransactionService extends BaseService implements ITransactionService {
  constructor(@Inject(TRANSACTION_REPOSITORY) private readonly transactionRepo: ITransactionRepository) {
    super(TransactionService.name);
  }
  createTransaction(dto: ICreateTransactionService): Promise<Transactions> {
    return this.transactionRepo.createTransaction(dto);
  }
}
