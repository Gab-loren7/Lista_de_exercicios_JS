/*Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários. */

let capacidadePessoas
let quantidadeBanheiros
let quantidadeBar

alert("Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros.")

capacidadePessoas = Number(prompt("Qual vai ser a capacidade de pessoas no festival de música? "))

quantidadeBanheiros = (capacidadePessoas/50).toFixed(0)
quantidadeBar = (capacidadePessoas/150).toFixed(0)

alert("Se a capacidade de pessoas é de " + capacidadePessoas + ", então precisaremos de " + quantidadeBanheiros + " banheiro(os) e " + quantidadeBar + " bar(res)")