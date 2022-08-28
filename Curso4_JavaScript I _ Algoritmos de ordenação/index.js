//Importanto lista de livros
const livros = require('./listaLivros');


//Inicializando variáveis
let maisBarato = 0;


//Percorrendo Array para achar livro mais barato
for (let atual = 0; atual < livros.length; atual++ ){
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    } 
};

console.log (`O livro ${livros[maisBarato].titulo} é o mais barato e custa R$${livros[maisBarato].preco}.`)