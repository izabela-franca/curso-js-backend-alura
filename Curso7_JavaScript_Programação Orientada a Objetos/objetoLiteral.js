const user = {
  nome: "Izabela",
  email: "izabela@email.com",
  nascimento: "2021/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Diego",
  email: "diego@email.com",
  role: "admin",
  criarCurso() {
    console.log("Curso criado");
  },
};

//Definindo um protótipo
Object.setPrototypeOf(admin, user); //1º parametro de quem herdam , 2° parametro de que será herdado

admin.criarCurso();
admin.exibirInfos();
