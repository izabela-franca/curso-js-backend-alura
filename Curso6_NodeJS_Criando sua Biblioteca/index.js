//Importando bibliotecas
import fs from 'fs';    //lib para ler arquivos em JS

//Tratamento de erros
function tratarErro(erro) {
    throw new Error(erro.code, 'O caminho é um diretório.');
}


//Acessando arquivos
function acessarArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
        if (erro){
            tratarErro(erro);
        }
        console.log(texto)
    });
}

acessarArquivo('./arquivos/texto1.md');
