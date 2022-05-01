import "../styles/globals.css";
import type { AppProps } from "next/app";
import classes from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={classes.container}>
      <Head>
        <title>Transactions</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={classes.main}>
        <div className="w-full flex justify-end">
          <div className="text-right">
            <p>{"Antonio Barile's coding interview for"}</p>
            <Image src={"/logo.png"} width={120} height={32} />
          </div>
        </div>

        <Component {...pageProps} />
      </main>

      <footer className={classes.footer}>
        <a
          href="https://www.anubidigital.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={classes.logo}>
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
}

export default MyApp;
