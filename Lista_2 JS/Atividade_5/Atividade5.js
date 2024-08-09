/*Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela.*/

let pesoUser
let alturaUser
let IMC

alert("Este programa cálcula o seu IMC(Índice de Massa Corporal). Poderia me dar algumas informações para realizar o cálculo para você?")

pesoUser = Number(prompt("Qual o seu peso?"))
alturaUser = Number(prompt("Qual a sua altura?"))

alert("Cálculando...")

IMC = pesoUser / (alturaUser * alturaUser)

alert("Tudo pronto. O seu índice de massa corporal é de: "+IMC.toFixed(2))