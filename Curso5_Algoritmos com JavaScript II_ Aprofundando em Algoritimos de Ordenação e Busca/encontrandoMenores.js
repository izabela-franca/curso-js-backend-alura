//Importando lista
const listaLivros2 = require('./listaLivros2');


//Criando uma função para encontrar o número de elementos menores que o pivô
function encontrarMenores (pivo, array) {

    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++;
        }
    }

    trocarLugar(array, array.indexOf(pivo), menores);
    return array;
}


//Colocando o pivô na posição correta (de acordo com o número de elementos menores que ele)
function trocarLugar(array, de, para) {
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}


// Ordenando todos os elementos menores que o pivô
function dividirNoPivo (array){
    let pivo = array[Math.floor(array.length / 2)];
    encontrarMenores(pivo ,array);
    let valoresMenores = 0;
    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
        if (atual.preco <= pivo.preco && atual !== pivo) {
            trocarLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }
    
    return array;
}

module.exports = trocarLugar;
