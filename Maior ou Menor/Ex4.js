/*Crie Variavel que converte dados digitados */
const teclado = require("prompt-sync")({sigint:true});
/*Recebe Dados */

let Idade = parseInt(teclado("Digite a Idade"));

switch (true) {
    case (Idade < 18):
        console.log("Menor de Idade")
        break;

    case (Idade > 18):
        console.log("Maior de Idade")
        break;

    default:
        console.log("Dados Inseridos Inválidos")
        break;
}       