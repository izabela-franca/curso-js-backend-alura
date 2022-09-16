//Criando linha de comandos para biblioteca criada

import { acessarArquivo } from "./index";
//const acessarArquivo = require ('./index')

const caminho = process.argv;

function processarTexto(caminhoArquivo) {
    const resultado = acessarArquivo(caminhoArquivo[2]);
    console.log(("lista de links"), resultado);
}

processarTexto (caminho);
console.log(acessarArquivo(caminho[2]));
