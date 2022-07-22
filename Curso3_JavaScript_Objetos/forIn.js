//Criando um Objeto
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
    depositar: function(valor){     
        this.saldo += valor       
    }   
}


//Percorrendo um Objeto com for in
let relatorio = " "

for (let info in cliente){      //"info" substitui o .nome, .idade, etc
    if (typeof cliente[info] === "object" || typeof cliente[info] == "function"){  
        continue;   //Se for um Objeto ou uma Função devemos apenas seguir percorrendo
    } else {
        relatorio += `  
        ${info}: ${cliente[info]} 
        `           //Pulando linha com Template String
    }
}

console.log(relatorio)

