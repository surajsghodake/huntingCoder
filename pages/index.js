import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="keywords"
          content="nextjs, huntingcoder blog, hunting coder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.imagewrap}>
          {/* <Image
            className={styles.myImg}
            src="/homeimg.avif"
            width={165}
            height={110}
            alt="homeimg.avif"
            priority
          /> */}

          <img
            className={styles.myImg}
            src="/homeimg.avif"
            width={165}
            height={130}
            alt="homeimg.avif"
          />
        </div>
        <div className={styles.title}>
          <h1>&lt;HuntingCoder/&gt;</h1>
        </div>

        <div className={styles.description.center}></div>

        <div className={styles.blog}>
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p>
              Javascript is used to design logic for web. Javascript is used to
              design logic for web. Javascript is used to design logic for web.
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p>Javascript is used to design logic for web.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn Javascript in 2024?</h3>
            <p>Javascript is used to design logic for web.</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>
    </>
  );
}
