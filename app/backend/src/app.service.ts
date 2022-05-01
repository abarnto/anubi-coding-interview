import { Injectable, NotImplementedException } from "@nestjs/common"
import { TransactionsRepo } from "./database/transactions.repo"
import { Transaction, Balance } from "./database/transactions.types"

const INTEREST_RATES_BY_ASSET = {
  BTC: 5,
  ETH: 6.6,
  DOT: 8,
}

@Injectable()
export class AppService {
  constructor(private readonly transactionsRepo: TransactionsRepo) {}

  getTransactions(page: number = 1, pageSize: number = 5): Transaction[] {
    const allTransactions = this.transactionsRepo.getAll().sort((a, b) => {
      const aDate = new Date(a.createdOn)
      const bDate = new Date(b.createdOn)

      return aDate >= bDate ? 1 : -1
    })

    const offset = (page - 1) * pageSize // 'page - 1' because it's index based

    return allTransactions.slice(offset, offset + pageSize)
  }

  /**
   * It calculates the total balance (sum of amounts) grouped by user id, and asset
   *
   * @returns The balance releated to all transactions registered
   */
  getBalanceByUser(): Balance {
    return this.transactionsRepo
      .getAll()
      .reduce((acc: Balance, curr: Transaction) => {
        const { user, asset, amount } = curr
        acc[user.id] = acc[user.id] || {} // adding user if not processed yet or using the existing one
        acc[user.id][asset] = acc[user.id][asset] + amount || 0 // adding the amount to existing asset or adding the asset if not processed yet, setting the amount to 0

        return acc
      }, {})
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
