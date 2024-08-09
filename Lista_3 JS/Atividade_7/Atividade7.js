/* Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela. */

//Declarar Variáveis
let peso1 
let peso2
let peso3
let nota1
let nota2
let nota3
let mediaPonderada

//Contexto
alert("Este programa realiza o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final.")

//Entrada de Dados
alert("Preciso que você me diga os pesos das atividades")
peso1 = Number(prompt('Qual é o "peso da nota" da Atividade Individual?'))
peso2 = Number(prompt('Qual é o "peso da nota" do Seminário em Equipe?'))
peso3 = Number(prompt('E o "peso da nota" do Projeto final?'))
alert("Agora as notas...")
nota1 = Number(prompt("Qual seria a nota da Atividade Individual?"))
nota2 = Number(prompt("Qual seria a nota do Seminário em Equipe?"))
nota3 = Number(prompt("E a nota do Projeto final?"))

//Cálculos
mediaPonderada = (peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)

//Saída de Dados
alert("Cálculando...")
alert("O resultado da média ponderada das 3 notas é de: \n\n" + mediaPonderada.toFixed(1))
