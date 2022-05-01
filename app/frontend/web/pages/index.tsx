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
        <title>Anubi Digital Coding Interview</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <p>{"Antonio Barile coding interview for "}</p>
        <Image src={"/logo.png"} width={120} height={32} />

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
              alt="Vercel Logo"
              width={120}
              height={32}
            />
          </span>
        </a>
        <a href="https://icons8.com/icon/Ie7jWIuVvh9E/withdraw">
          Icon by Icons8
        </a>
      </footer>
    </div>
  );
};

export default Home;
