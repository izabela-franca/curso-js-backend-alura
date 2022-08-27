//Criando uma classe Cliente
class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome,
        this.email = email,
        this.cpf = cpf,
        this.saldo = saldo
    }
    depositar(valor) {
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
};


//Criando uma nova classe que contém Herança
class ClientePoupanca extends Cliente{
    constructor (nome, email, cpf, saldo, saldoPoup){
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor) {
        this.saldoPoup += valor
    }
};


//Criando nova instância de Cliente Poupança
const izabela = new ClientePoupanca ("Izabela França", "izabela@email.com", "54896248236", 250, 600);
console.log(izabela)