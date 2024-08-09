/* Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação. */

//Declarar Variáveis
let numeroBase
let expoente
let resultadoDaExponenciacao

//Contexto
alert("Este é um programa no qual o usuário deve digitar um número (base) e o seu expoente. Preciso de algumas informações para o cálculo, ok?")

//Entrada de Dados
numeroBase = Number(prompt("Qual seria o número da base?"))
expoente = Number(prompt("E o expoente?"))

//Cálculos
resultadoDaExponenciacao = numeroBase ** expoente

//Saída de Dados
alert("Cálculando...")
alert("O resultado da exponênciação é igual a: \n\n"+ resultadoDaExponenciacao)
