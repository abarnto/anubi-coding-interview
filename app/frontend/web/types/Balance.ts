export interface Balance {
  [user: string]: {
    [asset: string]: number;
  };
}
