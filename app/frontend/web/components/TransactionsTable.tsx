import { Transaction } from "../types";
import MockedUserIcon from "./MockedUserIcon";
import TransactionNatureIcon from "./TransactionNatureIcon";

const TransactionsTable: React.ElementType = ({ data }: { data: Transaction[] }) => (
  <div className="relative rounded-xl overflow-auto">
    <div className="shadow-sm overflow-hidden my-8">
      <table className="table-auto border-collapse table-auto w-full text-sm">
        <thead>
          <tr className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
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
                <div>
                  <TransactionNatureIcon {...t.nature} />
                  <div>{t.nature.code}</div>
                </div>
              </td>
              <td>{t.asset}</td>
              <td>{t.amount}</td>
              <td>{t.createdOn}</td>
              <td>
                <MockedUserIcon {...t.user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TransactionsTable;
