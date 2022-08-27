//Declarando uma classe
class Cliente {
    //Definindo atributos
    constructor(nome, email, cpf, saldo){
        this.nome = nome,
        this.email = email,
        this.cpf = cpf,
        this.saldo = saldo
    }
    //Definindo métodos
    depositar(valor) {
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
};


//Instanciando um novo Cliente
const izabela = new Cliente ("Izabela França", "izabela@email.com", "45268430125", 250);
console.log(izabela)