import fs from 'fs';
import chalk from 'chalk';


//Tratamento de erros
function tratarErro(erro) {
    throw new Error (chalk.red(erro.code, 'Não há arquivos no diretório'));
}


//Trazendo o conteúdo dos arquivos 
function pegarArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            tratarErro(erro);
        }
        console.log(chalk.green(texto));
    })
}


pegarArquivo('./arquivos/texto.md');