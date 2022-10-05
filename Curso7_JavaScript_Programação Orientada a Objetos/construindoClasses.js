//Construindo uma classe User
export default class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }

  //Criando métodos para uma classe
  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

//Criando um novo usuário a partir da classe contruída
const novoUser = new User("Izabela", "izabela@email.com", "1991-05-03");

