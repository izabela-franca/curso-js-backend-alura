import fs from "fs";
import chalk from "chalk";

//Tratamento de erros
function tratarErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivos no diretório"));
}

//Trazendo o conteúdo dos arquivos de forma assíncrona com then()
function pegarArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch(tratarErro); //tratando erros
}

pegarArquivo("./arquivos/texto.md");
