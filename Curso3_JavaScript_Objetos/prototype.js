//Declarando uma função construtora
function Cliente (nome, cpf, email, saldo) {
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo
    this.depositar = function (valor){      //método depositar
        this.saldo += valor
    }
};


//Chamando as propriedades do construtor Cliente para dentro do construtor ClientePoup
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this,nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
};


//Criando nova instância de Cliente
const izabela = new ClientePoupanca("Izabela França", "48226814825", "izabela@email.com", 250, 650);


//Adicionando um novo método no protótipo
ClientePoupanca.prototype.depositarPoup = function (valor){
    this.saldoPoup += valor
};


//Chamando a nova instância criada e depositando na Poupança
izabela.depositarPoup(30)
console.log(izabela)