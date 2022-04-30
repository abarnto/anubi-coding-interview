import { Asset } from "../enums";
import { TransactionNature, User } from "../types";

export interface Transaction {
  id: string;
  nature: TransactionNature;
  createdOn: string;
  amount: number;
  asset: Asset;
  user: User;
}
