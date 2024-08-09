/* Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais.  */

let quantidadePlastico
let quantidadePapel
let quantidadeMetal
let valorReaisPlastico
let valorReaisPapel
let valorReaisMetal
let valorTotal

alert("Este programa realiza para você o cálculo de quanto irá receber, de acordo com a quantidade (kg) de cada material que deseja entregar para uma fábrica de reciclagem.")

quantidadePlastico = Number(prompt("Qual a quantidade(kg) de plástico que irá entregar a fábrica? \n\n(digite '0' se não for entregar este material)"))
quantidadePapel = Number(prompt("Qual a quantidade(kg) de papel que irá entregar a fábrica? \n\n(digite '0' se não for entregar este material)"))
quantidadeMetal = Number(prompt("Qual a quantidade(kg) de metal que irá entregar a fábrica? \n\n(digite '0' se não for entregar este material)"))

alert("Cálculando...")

valorReaisPlastico = (quantidadePlastico/10) * 2
valorReaisPapel = (quantidadePapel/30) * 3
valorReaisMetal = (quantidadeMetal/50) * 5
valorTotal = valorReaisPlastico + valorReaisPapel + valorReaisMetal

alert("Valor que você irá receber: \n\nValor Total: R$"+valorTotal.toFixed(2)+"\n\nValor por Plástico: R$"+valorReaisPlastico.toFixed(2)+"\n\nValor por Papel: R$"+valorReaisPapel.toFixed(2)+"\n\nValor por Metal: R$"+valorReaisMetal.toFixed(2))

