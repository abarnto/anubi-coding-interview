import { Injectable, NotImplementedException } from "@nestjs/common"
import { TransactionsRepo } from "./database/transactions.repo"
import { Transaction } from "./database/transactions.types"

const INTEREST_RATES_BY_ASSET = {
  BTC: 5,
  ETH: 6.6,
  DOT: 8,
}

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

  /**
   * @dev This method is used to calculate the interests due to a customer based on the assets he deposited
   *  The interests calculation must be per-asset within a month timeframe.
   *  For example this method should calculate for user u1 the interests matured by his ETH assets and the interest rate
   *  This is the formula:
   *     total_interest = (total balance of the asset type owned by the user) * (rate found inside INTEREST_RATES_BY_ASSET variable depending on the asset id)
   *
   *  After the calculation of the interest due, it should be created a TransactionNature=Interest and the amount calculated by the previous step
   *
   * @returns
   */
  processUserInterests(): any {
    // TODO: applicant should implement this method
    throw new NotImplementedException()
  }
}
