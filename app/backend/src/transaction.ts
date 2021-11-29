export interface Transaction {
  id: string;
  nature: {
    code: string;
  };
  amount: number;
  asset: string;
  user: {
    id: string;
  };
}
