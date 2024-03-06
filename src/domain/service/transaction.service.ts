import { Transactions } from '@infrastructures/io/entity';
import {
  ICreateTransactionService,
  IListTransactionServiceQuery,
  IListTransactionServiceResponse
} from '@shares/type/transaction.interface';

export const TRANSACTION_SERVICE = 'TRANSACTION_SERVICE';
export interface ITransactionService {
  listTransactions(query: IListTransactionServiceQuery): Promise<IListTransactionServiceResponse>;
  createTransaction(dto: ICreateTransactionService): Promise<Transactions>;
}
