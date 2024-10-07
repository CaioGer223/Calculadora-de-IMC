/*Crie Variavel que converte dados digitados */
const teclado = require("prompt-sync")({sigint:true});
/*Recebe Dados */
let Peso = parseFloat(teclado("Digite o peso:  "));
let Altura = parseFloat(teclado("Digite a altura:  "));

let IMC = (Peso / (Altura * Altura))


switch (true) {

    case (IMC <= 18.5):
         console.log(`Seu índice é: ${IMC.toFixed(2)}, e está Abaixo do Peso`);
         break;

    case (IMC <= 24.9):
        console.log(`Seu índice é: ${IMC.toFixed(2)}, e está com Peso Normal`);
        break;

    case (IMC <= 29.9):
        console.log(`Seu índice é: ${IMC.toFixed(2)}, e está Acima do Peso`);
        break;

    case (IMC <= 34.9):
        console.log(`Seu índice é: ${IMC.toFixed(2)}, e está Obesidade Grau I`);
        break;

    case (IMC <= 40):
        console.log(`Seu índice é: ${IMC.toFixed(2)}, e está Obesidade Grau II`);
        break;

    case (IMC >= 40):
        console.log(`Seu índice é: ${IMC.toFixed(2)}, e está Obesidade Grau III`);
        break;

    default: 
        console.log("Dados Inseridos Inválidos")
        break;
        
}