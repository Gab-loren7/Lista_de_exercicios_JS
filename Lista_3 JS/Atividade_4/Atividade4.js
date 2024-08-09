/* Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50. */

//Declarar Variáveis
let azulejosPorMetroQuadrado = 120
let calculoAreaMetroQuadrado
let larguraPiscina
let comprimentoPiscina
let quantidadeAzulejosComprar
let valorTotalPagar
let azulejosPorCaixa//60 unidades = R$ 45,50

//Contexto
alert("Seu sonho é construir uma piscina. Preciso de algumas informações para construí-la, ok?")

//Entrada de Dados
larguraPiscina = Number(prompt("Qual seria a largura(em metros) da piscina?"))
comprimentoPiscina = Number(prompt("Qual seria o comprimento(em metros) da piscina?"))
 
//Cálculos
calculoAreaMetroQuadrado = larguraPiscina + comprimentoPiscina
quantidadeAzulejosComprar = calculoAreaMetroQuadrado * azulejosPorMetroQuadrado
azulejosPorCaixa = quantidadeAzulejosComprar / 60
valorTotalPagar = azulejosPorCaixa * 45,50

//Saída de Dados
alert("Cálculando...")
alert("Essa é a quantidade de azulejos a ser comprada e o valor total a ser pago:\n\nQuantidade Total de Azulejos: "+quantidadeAzulejosComprar+"\n\nCaixas necessárias(considerando que cada uma vem 120 unidades.): "+azulejosPorCaixa+"\n\nValor total a ser pago: R$"+valorTotalPagar)
