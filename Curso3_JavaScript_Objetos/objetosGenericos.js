//Declarando uma função construtora
function Cliente (nome, cpf, email, saldo) {
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo
    this.depositar = function (valor){      //método depositar
        this.saldo += valor
    }
}


//Criando um novo objeto
const izabela = new Cliente ("Izabela França", "41060428126", "izabela@email.com", 250)

console.log (izabela)
