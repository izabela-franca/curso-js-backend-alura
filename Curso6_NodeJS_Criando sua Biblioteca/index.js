import fs from "fs";
import chalk from "chalk";

//Tratamento de erros
function tratarErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivos no diretório"));
}

//Extraindo links através de expressões regulares
function extrairLink(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)]; ///spread operator para expandir o conteúdo iterável
  const resultados = capturas.map((captura) => ({ [captura[1]]: captura[2] }));
  return resultados;
}


//Trazendo o conteúdo dos arquivos de forma assíncrona com async/await
async function pegarArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding); //pegando a resposta
    console.log(extrairLink(texto));
  } catch (erro) {
    tratarErro(erro);
  }
}

pegarArquivo("./arquivos/texto.md");
