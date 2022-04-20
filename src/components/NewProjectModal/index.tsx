import Modal from "react-modal";

import styles from "./styles.module.scss";

interface NewProjectModalProps {
  isOpen: boolean;
  onRequestClose: (isOpen: boolean) => void;
}

export function NewProjectModal({ isOpen, onRequestClose }: NewProjectModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modalContainer}
    >
      <div className={styles.modalContent}>
        <h1>Monte seu projeto</h1>

        <form className={styles.formContainer}>
          <label htmlFor="project-name">Nome do seu projeto</label>
          <input type="text" placeholder="Nome" id="project-name" />

          <label htmlFor="project-email">Seu E-mail</label>
          <input type="text" placeholder="E-mail" id="project-email" />

          <h2>Escolha um serviço</h2>

          <fieldset>
            <h2>Selecione um serviço</h2>

            <div className={styles.serviceOption}>
              <h3>Landing page</h3>
            </div>
            <div className={styles.serviceOption}>
              <h3>Mobile</h3>
            </div>
            <div className={styles.serviceOption}>
              <h3>Automação</h3>
            </div>
          </fieldset>

          <textarea placeholder="Descreva um pouco do seu projeto" />
          <button
            type="submit"
          >Enviar meu projeto</button>
        </form>
      </div>
    </Modal>
  );
}