const notas = [10, 9.5, 8, 7.5];

//Percorrendo listas com For
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;

console.log(media);


//Percorrendo listas com o método forEach()
let somaDasNotas2 = 0;

notas.forEach(nota => {
    somaDasNotas2 += nota;
})
let media2 = somaDasNotas2 / 4

console.log(media2)
