import { Transactions } from '@infrastructures/io/entity';
import { ICreateTransactionService } from '@shares/transaction.interface';

export const TRANSACTION_SERVICE = 'TRANSACTION_SERVICE';
export interface ITransactionService {
  createTransaction(dto: ICreateTransactionService): Promise<Transactions>;
}
