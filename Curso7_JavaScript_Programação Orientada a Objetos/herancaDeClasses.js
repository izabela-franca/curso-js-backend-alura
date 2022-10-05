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

//Criando um novo usuário a partir da classe contruída
const novoAdmin = new Admin("Diego", "diego@email.com", "1991-09-04");
console.log(novoAdmin.criarCurso("Node.js", "20"));
