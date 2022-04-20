import Head from 'next/head'

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | yago.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <section className={styles.hero}>
          <h1>Me conte um pouco sobre suas <span>maiores necessidades.</span></h1>
          <p>
            Olá! Me chamo Yago, sou desenvolvedor web e estou aqui <br />
            para atender todas as suas necessidades tecnológicas!
          </p>
        </section>

        <img src="/images/hero.svg" alt="hero image" />
      </main>
    </>
  )
}