/* Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio. */

/* 
 5 min = 10 m³ = R$ 150,00
 1 m³ = R$ 15,00
 1 min = 2 m³ = R$ 30,00

 valor do passeio = somar o valor gasto em gás, mais uma taxa de R$20 reais por pessoa.
*/

let pessoasPorPasseio
let tempoPasseio
let soma
let taxaPorPessoa
let gastoTempo
let valorPorPessoa

alert("O festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas. Você quer participar?")

pessoasPorPasseio = Number(prompt("Quantas pessoas vão passear no balão (máx: 4 pessoas)?"))
tempoPasseio = Number(prompt("Vocês querem o passeio por quantos minutos?"))

taxaPorPessoa = pessoasPorPasseio * 20
gastoGas = tempoPasseio * 30
soma = taxaPorPessoa + gastoGas
valorPorPessoa = soma / pessoasPorPasseio

alert("Cálculando o preço final...")
alert("Custo do passeio: \nValor total: R$"+soma+",00 \nValor dividido para a(as) "+pessoasPorPasseio+" pessoa(as): R$"+valorPorPessoa+",00")
