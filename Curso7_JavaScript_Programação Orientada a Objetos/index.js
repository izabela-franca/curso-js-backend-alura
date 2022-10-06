import User from "./construindoClasses.js";
import Admin from "./herancaDeClasses.js";

//Criando novos users e admins a partir da classe contruída
const novoUser = new User("Izabela", "izabela.@email.com", "1991-05-03");
const novoAdmin = new Admin("Diego", "diego@email.com", "1991-09-04");

console.log(novoUser.exibirInfos());
console.log(novoAdmin.exibirInfos());
