export enum TransactionNature {
  Deposit = "Deposit",
  Withdraw = "Withdraw",
  Rewards = "Rewards",
  Interest = "Interest",
}

export interface Transaction {
  id: string
  nature: {
    code: TransactionNature
  }
  amount: number
  asset: string
  user: {
    id: string
  }
  createdOn: string
}

export interface Balance {
  [user: string]: {
    [asset: string]: number
  }
}
