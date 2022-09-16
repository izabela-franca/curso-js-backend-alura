//Criando linha de comandos para biblioteca criada

import { acessarArquivo } from "./index";
//const acessarArquivo = require ('./index')

const caminho = process.argv;

async function processarTexto(caminhoArquivo) {
    const resultado = await acessarArquivo(caminhoArquivo[2]);
    console.log(('lista de links'), resultado);
}

processarTexto (caminho);
