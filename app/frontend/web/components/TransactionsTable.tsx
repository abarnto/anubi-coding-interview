import { Transaction } from "../types";
import MockedUserIcon from "./MockedUserIcon";
import TransactionNatureIcon from "./TransactionNatureIcon";
import AssetLabel from "./AssetLabel";

import classes from "../styles/TransactionTable.module.css";

const TransactionsTable: React.ElementType = ({ data }: { data: Transaction[] }) => (
  <div className="flex w-5/6 justify-center">
    <table className="text-center table-auto border-2 rounded-xl w-4/6 text-sm">
      <thead>
        <tr className="border-b font-medium text-slate-400">
          <th>Nature</th>
          <th>Asset</th>
          <th>Amount</th>
          <th>Created On</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((t) => (
          <tr key={t.id} className="bg-white dark:bg-slate-800">
            <td>
              <div className={classes.nature}>
                <TransactionNatureIcon {...t.nature} />
                <div>{t.nature.code}</div>
              </div>
            </td>
            <td className={classes.asset}>
              <AssetLabel>{t.asset}</AssetLabel>
            </td>
            <td className={classes.amount}>{t.amount}</td>
            <td className={classes.createdOn}>{t.createdOn}</td>
            <td>
              <MockedUserIcon {...t.user} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionsTable;
