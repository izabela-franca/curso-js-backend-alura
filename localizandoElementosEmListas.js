//Declarando as variáveis
const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediaDosAlunos = [10, 9, 7, 6];
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];


//Localizando um aluno através dos métodos de include() e indexof
const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {     
        let indice = listaDeNotasEAlunos[0].indexOf (nomeDoAluno)    
        return `${listaDeNotasEAlunos[0][indice]} , sua média é ${listaDeNotasEAlunos[1][indice]}.`;
    } else {
        return "Aluno(a) não está cadastrado.";
    }
}


//Chamando função
console.log(exibeNomeNota("Caio"));

