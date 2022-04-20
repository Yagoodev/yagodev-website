import Head from "next/head";

import styles from "./styles.module.scss";

export default function myservices() {
  return (
    <>
      <Head>
        <title>Serviços | yago.dev</title>
      </Head>

      <main className={styles.servicesContainer}>
        <section className={styles.overview}>
          <span>Especialista em diversas áreas.</span>
          <h1>O que você pode contratar</h1>

          <div>
            <p>
              Atuo em diversas áreas no ramo da técnologia, focado em pensar
              em soluções criativas para solucionar os diversos e maiores
              problemas dos meus clientes.
            </p>
          </div>
        </section>

        <section className={styles.services}>
          <div>
            <div className={`${styles.labelContainer} ${styles.blue}`}>
              <label>Landing page</label>
            </div>
            <p>
              Precisa de uma landing page para o seu negócio? Ou até mesmo
              dar uma repaginada na que você já tem? Contrate este serviço.
            </p>
          </div>
          <div>
            <div className={`${styles.labelContainer} ${styles.red}`}>
              <label>Mobile</label>
            </div>
            <p>
              Contratando o serviço de desenvolvimento de apps você terá
              um design completamente personalizado e criado para o seu negócio.
            </p>
          </div>
          <div>
            <div className={`${styles.labelContainer} ${styles.yellow}`}>
              <label>Automação</label>
            </div>
            <p>
              Agora se você precisa de agilidade nos seus serviços? Caso sim, irei fazer
              um estudo dos seus processos e entregarei tudo o que pode ser automatizado.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}