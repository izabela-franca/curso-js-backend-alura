//Importando bibliotecas
import fs from 'fs';    //lib para ler arquivos em JS

//Tratamento de erros
function tratarErro(erro) {
    throw new Error(erro.code, 'O caminho é um diretório.');
}


//Acessando arquivos de forma assíncrona com async
async function acessarArquivo (caminhoArquivo) {
    const encoding = 'utf-8';
    
    try {
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)  //await onde temos uma requisção a ser esperada
        console.log(texto)
    } catch(erro) {
        tratarErro(erro);
    } finally {
        console.log('Operação concluída')
    }
}

acessarArquivo('./arquivos/texto1.md');