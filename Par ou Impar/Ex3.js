/*Crie Variavel que converte dados digitados */
const teclado = require("prompt-sync")({sigint:true});
/*Recebe Dados */

let n = teclado("Digite um numero");

let resultado = n % 2 == 0 ? 'Par' : 'Impar';

console.log(`O resultado de: ${n} é ${resultado}`);
