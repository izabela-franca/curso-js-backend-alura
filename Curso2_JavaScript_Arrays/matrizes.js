const alunos = ["João", "Juliana", "Caio", "Ana"];

const mediasDosAlunos = [10, 7, 9, 6];

                         // 0[alunos]  1[medias]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]; //Lista de duas dimensões

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}.`) //João, sua média é 10.
console.log(`${listaDeNotasEAlunos[0][3]}, sua média é ${listaDeNotasEAlunos[1][3]}.`) //Ana, sua média é 6.

