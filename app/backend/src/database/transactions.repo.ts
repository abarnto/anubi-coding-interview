import { Injectable } from "@nestjs/common"
import * as MOCKED_TRANSACTIONS from "./transactions.json"
import { Transaction } from "./transactions.types"

/**
 * This repo class is a "mocked" in-memory transactions database
 * that should be used in order to perform any CRUD operation
 */
@Injectable()
export class TransactionsRepo {
  private readonly transactions: Transaction[] = MOCKED_TRANSACTIONS

  getAll = () => this.transactions

  add = (transaction: Transaction) => this.transactions.push(transaction)
}
