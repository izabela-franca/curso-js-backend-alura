//Declarando e chamando uma função 
function calcularMultiplicacao (n1, n2) {
    return n1 * n2;
}
console.log(calcularMultiplicacao(8, 3));


//Expressão de função
const multiplicacao = function (n1, n2) {return n1 * n2}
console.log(multiplicacao(8, 3));


//Arrow function
const multiplicar = (n1, n2) => {return n1 * n2};
console.log(multiplicar(8, 3));