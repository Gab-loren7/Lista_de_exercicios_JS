/*Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto. */

let livro1
let livro2
let livro3
let total
let desconto

alert("Na feira de livros estão fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto.")

livro1 = Number(prompt("Qual o valor do primeiro livro?"))
livro2 = Number(prompt("Qual o valor do segundo?"))
livro3 = Number(prompt("E o terceiro?"))

total = livro1 + livro2 + livro3
desconto = total / 0.15

alert("O total de livros sem o desconto é de: " + total)

alert("Com o desconto, os livros custam: " + desconto)

