import { Transactions } from '@infrastructures/io/entity';
import {
  ICreateTransactionRepo,
  IListTransactionRepoQuery,
  IListTransactionRepoResponse
} from '@shares/type/transaction.interface';
import { Repository } from 'typeorm';

export const TRANSACTION_REPOSITORY = 'TRANSACTION_REPOSITORY';
export interface ITransactionRepository extends Repository<Transactions> {
  createTransaction(data: ICreateTransactionRepo): Promise<Transactions>;
  listTransactions(query: IListTransactionRepoQuery): Promise<IListTransactionRepoResponse>;
}
