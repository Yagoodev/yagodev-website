import { useState } from "react";

import { NavigateLink } from "../NavigateLink";
import { NewProjectModal } from "../NewProjectModal";

import styles from "./styles.module.scss";

export function Header() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <NewProjectModal
        isOpen={isOpen}
        onRequestClose={setIsOpen}
      />

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
            <NavigateLink activeClassName={styles.active} href="/myservices">
              <a>serviços</a>
            </NavigateLink>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >Novo projeto</button>
        </div>
      </header>
    </>
  );
}