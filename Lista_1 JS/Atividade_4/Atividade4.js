/*Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.*/

let semana1
let semana2
let semana3
let semana4
let media 

alert("Você é um programador(a) e deseja, ao final do mês, saber quantas horas por semana em média estudou programação.")

semana1 = Number(prompt("Quantas horas você estudou na primeira semana?"))
semana2 = Number(prompt("Quantas horas você estudou na segunda semana?"))
semana3 = Number(prompt("Quantas horas você estudou na terceira semana?"))
semana4 = Number(prompt("E na quarta semana?"))

alert("Irei cálcucar quanto vc estudou na semana")

media = semana1 + semana2 + semana3 + semana4 / 4

alert("Você estudou " + media + " horas no mês.")

