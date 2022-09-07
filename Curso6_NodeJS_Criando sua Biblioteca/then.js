//Importando bibliotecas
import fs from 'fs';    //lib para ler arquivos em JS

//Tratamento de erros
function tratarErro(erro) {
    throw new Error(erro.code, 'O caminho é um diretório.');
}


//Acessando arquivos de forma assíncrona
function acessarArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoArquivo, encoding)
    .then((texto) => console.log(texto))    // o que será feito quando a requisição estiver pronta
    .catch((erro) => tratarErro(erro))      // fará o tratamento do erro
}

acessarArquivo('./arquivos/texto1.md');