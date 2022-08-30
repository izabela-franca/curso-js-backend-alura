//Importanto arquivo contendo o objeto
const livros = require('./listaLivros');


//Criando uma função para inserir itens de forma orndenada
function insertionSort(lista){

    for (let atual = 0; atual < livros.length; atual++){
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
        
            //Trocando as posições de lugar
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;

            //Criando um decremento
            analise --;
        }
    }
    console.log(lista);
}

insertionSort(livros);