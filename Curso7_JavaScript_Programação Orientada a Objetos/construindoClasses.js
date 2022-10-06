//Construindo uma classe User
export default class User {
  //atributos privados
  #nome
  #email
  #nascimento
  #role
  #ativo

  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  //Criando métodos para uma classe
  exibirInfos() {
    return `${this.#nome}, ${this.#email}`;
  }
}
