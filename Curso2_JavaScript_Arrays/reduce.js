const sala5A = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const sala5B = [ 6, 5, 8, 9, 5, 6];
const sala5C = [7, 3.5, 8, 9.5];

function calculoMediaSala(notasDaSala) {                                                        //Esse 0 é o valor que a soma irá ser iniciada
    const somaDasNotas = notasDaSala.reduce((acumulador, valorAtual) => valorAtual + acumulador, 0)
    return somaDasNotas / notasDaSala.length
}

console.log(`Média da sala do 5A: ${calculoMediaSala(sala5A)}`);
console.log(`Média da sala do 5B: ${calculoMediaSala(sala5B)}`);
console.log(`Média da sala do 5C: ${calculoMediaSala(sala5C)}`);