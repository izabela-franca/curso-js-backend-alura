const livros = require('./listaLivros');
const menorValor = require('./menorValor');


//Criando repetição para ordenar valores
for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual]
    let livroMenorPreco = livros[menor]

    //Trocando as posições de lugar
    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
};

console.log(livros)