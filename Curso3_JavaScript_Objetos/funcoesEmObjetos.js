const cliente = {
    nome: "Izabela França",
    idade: 31,
    cpf: "12345678901",
    email: "izabela@email.com",
    telefones: ["78584267122", "78330269451"],
    dependentes : [
        {
            nome: "Pedro França",
            parentesco: "filho",
            dataNascimento: "05/10/2019"},
        {
            nome: "Luiza França",
            parentesco: "filha",
            dataNascimento: "18/02/2021"
        }
    ], 
    saldo: 100,
    depositar: function(valor){     //Criando uma função para dar comportamento ao objeto
        this.saldo += valor         //A chave é depositar e o valor é uma função
    }   
}


//Fazendo depósito
cliente.depositar(30);
console.log(cliente.saldo);
