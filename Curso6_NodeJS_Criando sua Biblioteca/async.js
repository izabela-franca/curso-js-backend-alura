import fs from "fs";
import chalk from "chalk";

//Tratamento de erros
function tratarErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivos no diretório"));
}

//Trazendo o conteúdo dos arquivos de forma assíncrona com async/await
async function pegarArquivo(caminhoDoArquivo) {
    try {
        const encoding = "utf-8";
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding); //pegando a resposta
        console.log(chalk.green(texto));
    } catch(erro) {
        tratarErro(erro)
    }

}

pegarArquivo("./arquivos/texto.md");
