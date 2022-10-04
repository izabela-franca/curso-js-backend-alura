//Criando uma função construtora
function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}

//Novo objeto a partir do construtor
const novoUser = new User("Izabela", "izabela@email.com");
console.log(novoUser.exibirInfos());

//Método call()
function Admin(role) {
  User.call(this, "Diego", "diego@email.com"); //Recebendo as propriedades de User
  this.role = role || "estudante"; //se não receber o papel, atribuir como estudante
}

//Novo objeto a partir do Object.create()
Admin.prototype = Object.create(User.prototype);
const novoUser2 = new Admin("admin");
console.log(novoUser2.exibirInfos());

//Método mais utilizado
const user = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },

  exibirInfos2: function () {
    return `${this.nome}, ${this.email}`;
  },
};

const novoUser3 = Object.create(user);
novoUser3.init("Vilma", "vilma@email.com");
console.log(novoUser3.exibirInfos2());
