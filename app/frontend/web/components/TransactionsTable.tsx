import { Transaction } from "../types";
import MockedUserIcon from "./MockedUserIcon";
import TransactionNatureIcon from "./TransactionNatureIcon";
import AssetLabel from "./AssetLabel";
import DateTimeLabel from "./DateTimeLabel";

import classes from "../styles/TransactionTable.module.css";

const TransactionsTable: React.ElementType = ({
  data,
}: {
  data: Transaction[];
}) => {
  return (
    <div className="inline-block rounded-lg border shadow-2xl w-5/6">
      <table className="text-center table-auto w-full text-sm">
        <thead>
          <tr className="border-b text-2xl text-slate-500">
            <th style={{ paddingLeft: "4em" }}>Nature</th>
            <th>Asset</th>
            <th>Amount</th>
            <th>Created On</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((t) => (
            <tr key={t.id}>
              <td>
                <div className={classes.nature}>
                  <TransactionNatureIcon {...t.nature} />
                </div>
              </td>
              <td className={classes.asset}>
                <AssetLabel>{t.asset}</AssetLabel>
              </td>
              <td className={classes.amount}>{t.amount}</td>
              <td className={classes.createdOn}>
                <DateTimeLabel>{t.createdOn}</DateTimeLabel>
              </td>
              <td>
                <MockedUserIcon data={t.user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
