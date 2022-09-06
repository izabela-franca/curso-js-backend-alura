//Importando bibliotecas
const chalk = require('chalk');
const fs = require('fs');   //lib para acessar arquivos


//Acessando arquivos
function acessarArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto))
    });
}

acessarArquivo('./texto1md')