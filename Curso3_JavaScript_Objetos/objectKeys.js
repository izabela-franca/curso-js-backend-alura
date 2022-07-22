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


//Percorrendo um Objeto com Object.keys()
function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}.`)
    }
}

oferecerSeguro(cliente);