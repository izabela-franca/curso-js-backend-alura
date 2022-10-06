//Construindo uma classe usando herança
import User from "./construindoClasses.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  //Método criado para a própria classe
  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`;
  }
}
