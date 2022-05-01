import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import TransactionsTable from "../components/TransactionsTable";
import BasicPaginator from "../components/BasicPaginator";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
  return (
    <div className={styles.container}>
      <Head>
        <title>Transactions</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <div className="text-right">
          <p>{"Antonio Barile's coding interview for "}</p>
          <Image src={"/logo.png"} width={120} height={32} />
        </div>
        <h1 className="text-5xl self-center my-8">Transactions</h1>

        <TransactionsTable data={transactions} />
        <BasicPaginator
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.anubidigital.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/logo.png"
              alt="AnubiDigital Logo"
              width={120}
              height={32}
            />
          </span>
        </a>

        <a href="https://icons8.com">Icons by Icons8</a>
      </footer>
    </div>
  );
};

export default Home;
