//Importanto lista de livros
const livros = require('./listaLivros');


//Criando uma função Para encontrar menor valor
function menorValor(arrProdutos, posicaoInicial){
    //Inicializando variáveis
    let maisBarato = posicaoInicial;
    
    //Percorrendo Array para achar livro mais barato
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++ ){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        } 
    }
    return maisBarato;
};

module.exports = menorValor;
