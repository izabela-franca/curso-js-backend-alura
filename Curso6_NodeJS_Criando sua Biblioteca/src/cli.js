//Criando uma linha de comando para receber e retornar informações

import chalk from "chalk";
import fs, { lstat } from "fs";
import pegarArquivo from "./index.js";

const caminho = process.argv; //objeto do node que pegará os valores de argumento

function imprimirLista(resultado, identificador = '') {
  console.log(
    chalk.yellow("Lista de links"), 
    chalk.black.bgGreen(identificador),
    resultado);
}

async function processarTexto(argumentos) {
  const caminho = argumentos[2];

  //Tratamento de erros
  try {
    fs.lstatSync(caminho);
  } catch (erro) {
    if (erro.code === "ENOENT") {
      console.log("Arquivo ou diretório não existe");
      return;
    }
  }

  //Verificando se temos um diretório ou arquivo
  if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegarArquivo(argumentos[2]);
    imprimirLista(resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho);
    arquivos.forEach(async (nomeDeArquivo) => {
      const lista = await pegarArquivo(`${caminho}/${nomeDeArquivo}`);
      imprimirLista(lista, nomeDeArquivo);
    });
  }
}

processarTexto(caminho);
