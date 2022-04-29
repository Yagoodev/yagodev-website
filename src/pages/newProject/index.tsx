export default function newProject() {
  return (
    <div>
      <h2>Criando seu projeto</h2>
      <span>Me mostre suas necessidades, que irei buscar o máximo para ajudar na sua jornada!</span>

      <form onSubmit={event => event.preventDefault()}>
        <div>
          <label>Nome do projeto</label>
          <input placeholder="Digite o nome aqui" />
        </div>

        <div>
          <div>
            <h3>Landing page</h3>
            <span>Escolha essa opção caso você queira uma página de venda ou captura cliente para o seu negócio.</span>
          </div>
          <div>
            <h3>Mobile</h3>
            <span>Escolha essa opção caso você precise de um aplicativo para fazer o seu negócio decolar.</span>
          </div>
          <div>
            <h3>Automação</h3>
            <span>Agora, se você precisa de agilidade nos seus processos escolha a opção de automação de tarefas.</span>
          </div>
        </div>

        <button>Enviar projeto</button>
      </form>
    </div>
  );
}