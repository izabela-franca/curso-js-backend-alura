//Criando linha de comandos para biblioteca criada

import { acessarArquivo } from "./index";
//const acessarArquivo = require ('./index')

const caminho = process.argv;

console.log(acessarArquivo(caminho[2]));