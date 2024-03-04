import { TransactionTypeEnum } from '@constants/enum';

export interface ICreateTransactionService {
  type: TransactionTypeEnum;
  amount: number;
  walletUuid: string;
  userUuid: string;
  remark?: string;
}

export interface ICreateTransactionRepo extends ICreateTransactionService {}
