//Criando um objeto
const cliente = {
    nome: "Izabela",
    idade: 31,
    cpf: "12345678901",
    email: "izabela@email.com"
}


//Acessando um objeto
console.log(cliente.nome);
console.log(cliente.idade);


//Aplicando métodos em objetos
console.log(`Os três primeiros números do CPF são: ${cliente.cpf.substring(0,3)}.`);


//Acessando uma chave de objeto utilizando uma variável
const chaves = ["nome", "idade", "cpf", "email"]
console.log(cliente[chaves[3]]);


console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")


//Acessando todas as chaves de um objeto com forEach()
chaves.forEach (info => console.log(cliente[info]));


