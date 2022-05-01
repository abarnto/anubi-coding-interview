import type { NextPage } from "next";

import TransactionsTable from "../components/TransactionsTable";
import BasicPaginator from "../components/BasicPaginator";

import useTransactions from "../hooks/useTransactions";

const Home: NextPage = () => {
  const { transactions, setPage, setPageSize } = useTransactions();

  return (
    <>
      <h1 className="text-5xl self-center my-8">Transactions</h1>

      <TransactionsTable data={transactions} />
      <BasicPaginator
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </>
  );
};

export default Home;
