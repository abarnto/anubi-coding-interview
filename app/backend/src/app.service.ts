import { Injectable, NotImplementedException } from '@nestjs/common';
import * as MOCKED_TRANSACTIONS from './database/transactions.json';
import { Transaction } from './transaction';

@Injectable()
export class AppService {
  getTransactions(): Transaction[] {
    return MOCKED_TRANSACTIONS;
  }

  /**
   * @dev This method is used to get the total balance (sum of amounts)
   *  grouped by user id, and asset
   *
   * @returns
   */
  getBalanceByUser(): any {
    // TODO: applicant should implement this method
    throw new NotImplementedException();
  }
}
