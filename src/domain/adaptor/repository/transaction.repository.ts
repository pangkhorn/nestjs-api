import { Transactions } from '@infrastructures/io/entity';
import { ICreateTransactionRepo } from '@shares/transaction.interface';
import { Repository } from 'typeorm';

export const TRANSACTION_REPOSITORY = 'TRANSACTION_REPOSITORY';
export interface ITransactionRepository extends Repository<Transactions> {
  createTransaction(data: ICreateTransactionRepo): Promise<Transactions>;
}
