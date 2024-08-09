/* Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos. */

//Declarar Variáveis
let valorHoras
let valorMinutos
let valorSegundos

//Contexto
alert("Este é um programa que horas, minutos e segundos. Preciso de algumas informações para o cálculo, ok?")

//Entrada de Dados
valorHoras = Number(prompt("Digite um valor em horas"))
alert("Ótimo. Agora irei fazer o cálculo para minutos e segundos")

//Cálculos
valorMinutos = valorHoras * 60
valorSegundos = valorMinutos * 60

//Saída de Dados
alert("Cálculando...")
alert(valorHoras + "horas é igual a: " + "\n\nValor em Minutos: " + valorMinutos + "\n\nValor em Segundos: " + valorSegundos)
