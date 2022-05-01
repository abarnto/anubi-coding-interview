import { Transaction } from "./../types/Transaction";
import { useCallback, useEffect, useState } from "react";

const useTransactions: () => {
  transactions: Transaction[];
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
} = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const getTransactions = useCallback(() => {
    fetch(
      `http://localhost:3081/v1/transactions?page=${page}&pageSize=${pageSize}`
    )
      .then((res) => res.json())
      .then(setTransactions)
      .catch(console.error);
  }, [page, pageSize]);

  useEffect(getTransactions, [getTransactions]);

  return { transactions, setPage, setPageSize };
};

export default useTransactions;
