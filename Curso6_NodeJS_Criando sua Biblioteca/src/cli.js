//Criando uma linha de comando para receber e retornar informações

import chalk from "chalk";
import fs, { lstat } from "fs";
import pegarArquivo from "./index.js";
import listaValidada from "./http-validacao.js";

const caminho = process.argv; //objeto do node que pegará os valores de argumento

async function imprimirLista(valida, resultado, identificador = '') {
  
  if (valida) {
    console.log(
      chalk.yellow("Lista validada"), 
      chalk.black.bgGreen(identificador),
      await listaValidada(resultado));
  } else {
    console.log(
      chalk.yellow("Lista de links"), 
      chalk.black.bgGreen(identificador),
      resultado);
  }
  
}

async function processarTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3] === '--validar';

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
    imprimirLista(valida, resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho);
    arquivos.forEach(async (nomeDeArquivo) => {
      const lista = await pegarArquivo(`${caminho}/${nomeDeArquivo}`);
      imprimirLista(valida, lista, nomeDeArquivo);
    });
  }
}

processarTexto(caminho);
