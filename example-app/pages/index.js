import Head from "next/head";
import styles from "./index.module.css";
import Card from "../components/Card";
import GithubIcon from "../components/GithubIcon";
import TwitterIcon from "../components/TwitterIcon";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Generate Avatar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
      <GithubIcon />
      <TwitterIcon />
    </div>
  );
}
