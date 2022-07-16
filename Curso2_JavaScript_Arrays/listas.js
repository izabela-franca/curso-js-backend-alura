//Declarando a lista
const notas = [10, 6.5, 8, 7.5];

//Acessando a lista
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

//Imprimindo a lista
console.log(media);

//Adicionando novos elementos
notas.push(7);

//Deletando elementos
notas.pop();

//Dividindo listas com slice
const notasPrimeiroBimestre = notas.slice(0, notas.length/2);
const notasSegundoBimestre = notas.slice(notas.length/2);

//Modificanado listas com splice
const notasAtualizadas = notas.splice(0, 1, 9.5); //Para remover e em seguida adicionar
const notasAtualizadas2 = notas.splice(2, 0, 8.5); //Não remove, apenas adiciona um elemento no índice desejado

//Concatenando listas
const notasDoSemetre = notasPrimeiroBimestre.concat(notasSegundoBimestre);

