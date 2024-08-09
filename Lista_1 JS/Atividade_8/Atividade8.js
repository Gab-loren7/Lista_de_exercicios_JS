/*Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. Mostrar na tela o total a pagar. */

let quantidadePessoas
let numeroDiarias
let pessoasQueremCafe
let valorDiaria
let valorCafe
let totalPagar

alert("Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto.")

quantidadePessoas = Number(prompt("Quantas pessoas irão dormir no quarto?"))
numeroDiarias = Number(prompt("Quantas diárias irão ficar?"))
pessoasQueremCafe = Number(prompt("Quantas pessoas do grupo vão querer o café diário?"))

alert("Então serão "+ quantidadePessoas +" pessoas que irão ficar na pousada em um total de "+ numeroDiarias +" diárias. E "+ pessoasQueremCafe +" delas querem café.")

valorDiaria = (numeroDiarias * 280)
valorCafe = (pessoasQueremCafe * 15)*numeroDiarias
totalPagar = valorDiaria + valorCafe

alert("O valor a ser pago seré o seguinte: \nValor total da diária: R$"+valorDiaria+" \nValor total do café: R$"+valorCafe+" \nValor total a pagar: R$"+totalPagar)

