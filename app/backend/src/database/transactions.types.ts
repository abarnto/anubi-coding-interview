export enum TransactionNature {
  Deposit = "Deposit",
  Withdraw = "Withdraw",
  Rewards = "Rewards",
  Interest = "Interest",
}

export interface Transaction {
  id: string
  nature: {
    code: string
  }
  amount: number
  asset: string
  user: {
    id: string
  }
}
