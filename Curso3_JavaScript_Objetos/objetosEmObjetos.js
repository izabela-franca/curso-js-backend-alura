const cliente = {
    nome: "Izabela França",
    idade: 31,
    cpf: "12345678901",
    email: "izabela@email.com",
    telefones: ["78584267122", "78330269451"],
}


//Adicionando Objetos dentro de Objetos
cliente.dependentes = [{
    nome: "Pedro França",
    parentesco: "filho",
    dataNascimento: "05/10/2019"
}]


//Adicionando outros dependentes
cliente.dependentes.push({
    nome: "Luiza França",
    parentesco: "filha",
    dataNascimento: "18/02/2021"
})


//Acessando apenas um dos elementos da Array de dependentes usando filter()
const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNascimento === "18/02/2021");


//Imprimindo o nome do filho mais novo
console.log(filhoMaisNovo[0].nome);
