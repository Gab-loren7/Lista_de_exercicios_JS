/* Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos. */

//Declarar Variáveis
let territorioPorIndividuo = 320
let territorioPorCasal = 400
let quantidadeFemeas = 9
let quantidadeMachos = 5
let quantidadeTotalCasais
let femeasPorCasal
let machosPorCasal
let areaDominadaPorFemeaDoCasal
let areaDominadaPorMachoDoCasal
let somaGeralAreaDominada

//Contexto
alert("Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental.")

//Entrada de Dados
quantidadeTotalCasais = Number(prompt("Digite quantos casais existem dentre esse total?(9 fêmeas e 5 machos)"))

//Cálculos
somaGeralAreaDominada = quantidadeTotalCasais * territorioPorCasal
femeasPorCasal = quantidadeTotalCasais / 2
machosPorCasal = quantidadeTotalCasais / 2
areaDominadaPorFemeaDoCasal = femeasPorCasal * territorioPorIndividuo
areaDominadaPorMachoDoCasal = machosPorCasal * territorioPorIndividuo

//Saída de Dados
alert("Então o total de terrítorio dominado pelo casal é de: \n\n"+somaGeralAreaDominada+"km²\n\nSendo em média:\n\nPor fêmea do casal: "+areaDominadaPorFemeaDoCasal+"km²\n\nPor macho do casal: "+areaDominadaPorMachoDoCasal+"km²")
alert("E a quantidade de casais é de: \n\n"+quantidadeTotalCasais+"\n\nSendo em média:\n\nMachos por casal: "+machosPorCasal+"\n\nFêmeas por casal: "+femeasPorCasal)