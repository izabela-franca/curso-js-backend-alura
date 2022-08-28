const precosLivros = [25, 15, 30, 50, 45, 20];


//Inicializando variáveis
let maisBarato = 0;


//Percorrendo Array para achar livro mais barato
for (let atual = 0; atual < precosLivros.length; atual++ ){
    if (precosLivros[atual] < precosLivros[maisBarato]) {
        maisBarato = atual
    } 
};

console.log (`O livro mais barato custa R$${precosLivros[maisBarato]}.`)