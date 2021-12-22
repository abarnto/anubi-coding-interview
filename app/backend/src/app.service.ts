import { Injectable, NotImplementedException } from "@nestjs/common"
import { TransactionsRepo } from "./database/transactions.repo"
import { Transaction } from "./database/transactions.types"

@Injectable()
export class AppService {
  constructor(private readonly transactionsRepo: TransactionsRepo) {}

  getTransactions(): Transaction[] {
    return this.transactionsRepo.getAll()
  }

  /**
   * @dev This method is used to get the total balance (sum of amounts)
   *  grouped by user id, and asset
   *
   * @returns
   */
  getBalanceByUser(): any {
    // TODO: applicant should implement this method
    throw new NotImplementedException()
  }
}
