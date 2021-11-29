import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anubi Digital Coding Interview</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <p>
          {
            "Your coding interview has just started. Show us what you are truly capable of!"
          }
        </p>
        <Image src={"/logo.png"} width={120} height={32} />
        {/* Add your component here */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.anubidigital.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Vercel Logo" width={120} height={32} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
