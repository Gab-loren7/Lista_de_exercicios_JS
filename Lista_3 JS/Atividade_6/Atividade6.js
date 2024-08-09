/* Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.
 */

//Declarar Variáveis
let velocidadeMediaDasTrilhas
let distanciaPercorrida
let tempoDuracaoTrilha
let velocidade

//Contexto
alert("Você é um amante da natureza e adora fazer trilhas. Este programa irá cálcula a velocidade média das trilhas que você realiza. Para isso...")

//Entrada de Dados
distanciaPercorrida = Number(prompt("Digite os dados da distância percorrida (quilômetros)."))
tempoDuracaoTrilha = Number(prompt("E o tempo que a trilha durou (horas)."))

//Cálculos
velocidadeMediaDasTrilhas = distanciaPercorrida / tempoDuracaoTrilha
velocidade = velocidadeMediaDasTrilhas / tempoDuracaoTrilha

// velocidade média = △s / △t  |  aceleração = △V / △t

//Saída de Dados
alert("Sua média de velocidade durante essa trilha foi de "+ velocidadeMediaDasTrilhas.toFixed(2) +"km/h, sendo "+ velocidade.toFixed(1) +" a aceleração.")