//Criando uma Array de Objetos
const clientes = [
    {
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
        ]
    },
    {
        nome: "Diego Doce",
        idade: 30,
        cpf: "987654321-02",
        email: "diego@email.com",
        telefones: ["16954862205", "1977630214"],
        dependentes : [
            {
                nome: "João Doce",
                parentesco: "filho",
                dataNascimento: "30/07/2017"}
        ]
    }

] 

//Criando uma lista com os dados selecionados pelo Operador de Espalhamento
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(listaDependentes)