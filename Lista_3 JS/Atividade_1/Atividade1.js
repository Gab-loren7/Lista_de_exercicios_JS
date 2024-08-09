/* Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos. */

//Declarar Variáveis
let salarioBruto
let salarioLiquido
let descontoImposto

//Contexto
alert("Este é um programa que cálcula seu salário. Preciso de algumas informações para o cálculo, ok?")

// Entrada de Dados
salarioBruto = Number(prompt("Qual é o seu salário bruto?"))
alert("Ótimo. Agora irei fazer o cálculo do salário liquido junto ao imposto de 20%")

//Cálculos
descontoImposto = salarioBruto * 0.20
salarioLiquido = salarioBruto - descontoImposto

//Saída de Dados
alert("Cálculando...")
alert("O seu salário é de: \n\nSalário Bruto: R$"+salarioBruto+"\n\nDesconto em Imposto(20%): R$"+descontoImposto+"\n\nSalário líquido: R$"+salarioLiquido)
