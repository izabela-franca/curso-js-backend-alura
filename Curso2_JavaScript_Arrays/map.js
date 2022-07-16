//Atualizando notas com map()
const notas = [10, 7, 8, 8.5, 9];

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : nota + 1);

console.log(notasAtualizadas);


//Alterando Strings para maiúculas com map()
let nomes = ["ana Mendes", "José silveira", "PEDRO souza"];
const nomesEmMaiusculo = nomes.map(nome => nome.toUpperCase());
console.log(nomesEmMaiusculo);

//Alterando Strings para minusculas com map()
const nomesEmMinusculo = nomes.map(nome => nome.toLowerCase())
console.log(nomesEmMinusculo)