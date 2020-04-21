import Head from "next/head";
import styles from "./index.module.css";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
    </div>
  );
}
