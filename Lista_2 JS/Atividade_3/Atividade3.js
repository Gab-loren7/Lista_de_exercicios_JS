/* Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. */

let tempCelsius
let tempFahrenheit

alert("Este é um conversor de temperatura. Digite na próxima mensagem o valor de Celsius para transformar em Fahrenheit.")

tempCelsius = Number(prompt("Qual o valor em celsius?"))

alert("Ok, irei realizar o cálculo...")

tempFahrenheit = (tempCelsius * 9/5) + 32

alert(tempCelsius+"°C = ("+tempCelsius+" °C x 9/5) + 32 = "+ tempFahrenheit+" °F \n\nResultado = "+tempFahrenheit+" Fahrenheit.")