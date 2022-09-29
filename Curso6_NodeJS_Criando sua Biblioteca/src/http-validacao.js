import chalk from "chalk";

function extrairLinks(arrayLinks) {
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function checarStatus(listaURLs) {
  const arrayStatus = await Promise.all(
    listaURLs.map(async (url) => {
      try {
        const response = await fetch(url);
        return response.status;
      } catch (erro) {
        return manejarErros(erro)
      }
    })
  );
  return arrayStatus;
}

function manejarErros(erro) {
  if (erro.cause.code === 'ENOTFOUND') {
    return 'Link não encontrado';
  } else {
    return 'Ocorreu algum erro';
  }
}

export default async function listaValidada(listaDeLinks) {
  const links = extrairLinks(listaDeLinks);
  const status = await checarStatus(links);

  return listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice],
  }));
}
