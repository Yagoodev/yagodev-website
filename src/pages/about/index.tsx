import Head from "next/head";

import styles from "./styles.module.scss";

export default function about() {
  return (
    <>
      <Head>
        <title>Sobre | yago.dev</title>
      </Head>

      <main className={styles.aboutContainer}>
        {/* <article>
        <h1>Olá, tudo bem? 👏</h1>
        <p>
          Meu nome é Yago, eu tenho 21 anos e atuo como dev front-end a pouco mais de 1 ano
          Desde então venho buscando cada vez mais evoluir minhas habilidades e resolver a dor dos
          meus clientes que precisam de uma landing page para o seu negócio.
        </p>
        <p>
          Além do foco em desenvolvimento de landing pages atuo como dev mobile.
        </p>
      </article> */}
      </main>
    </>
  );
}