/*Faça um programa no qual o usuário digite dois números e mostre na tela a multiplicação desses números.*/

let primeiroNumero
let segundoNumero
let mult

alert("Escolha dois números para fazer uma multiplicação!")

primeiroNumero = Number(prompt("Qual seria o primeiro número?"))
segundoNumero = Number(prompt("E o segundo número?"))

mult = primeiroNumero * segundoNumero

alert(primeiroNumero+" . "+segundoNumero+" = "+mult)