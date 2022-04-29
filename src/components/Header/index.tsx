import { useState } from "react";

import { NavigateLink } from "../NavigateLink";

import styles from "./styles.module.scss";

export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2>Yago.dev</h2>

        <nav>
          <NavigateLink activeClassName={styles.active} href="/">
            <a>Inicio</a>
          </NavigateLink>
          <NavigateLink activeClassName={styles.active} href="/about">
            <a>Sobre</a>
          </NavigateLink>
          <NavigateLink activeClassName={styles.active} href="">
            <a>serviços</a>
          </NavigateLink>
        </nav>

        <NavigateLink activeClassName={styles.active} href="/newProject">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >Novo projeto</button>
        </NavigateLink>
      </div>
    </header>
  );
}