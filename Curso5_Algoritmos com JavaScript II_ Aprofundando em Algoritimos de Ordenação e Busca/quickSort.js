//Importando lista
const listaLivros = require('./listaLivros2');


//Importanto função
const trocarLugar = require('./encontrandoMenores');


function quickSort(array, esquerda, direita) {

    if (array.length > 1) {
      let indiceAtual = particionar(array, esquerda, direita); 
      if (esquerda < indiceAtual -1) {
        quickSort(array, esquerda, indiceAtual -1)
      }
      if (indiceAtual < direita) {
        quickSort(array, indiceAtual, direita)
      }
    }

    return array;
}


function particionar (array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda; 
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocarLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }

    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length -1));