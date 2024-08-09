/*Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

let totalDeEleitores
let votosCandidato_X
let votosCandidato_Y
let votosBranco
let votosNulo
let soma
let percentual_X
let percentual_Y
let percentual_Branco
let percentual_Nulo

alert("Digamos que você é uma cidade que pretende apurar os votos de sua eleição.")
alert("Este programa irá realizar o cálculo de sua eleição. Porém, preciso de algumas informações, ok?")

totalDeEleitores = Number(prompt("Qual o total de eleitores na sua cidade?"))

alert("Evite passar do total de eleitores nas próximas informações para não gerar erros no código.")

votosCandidato_X = Number(prompt("Qual o total de votos para o candidato X?"))
votosCandidato_Y = Number(prompt("Qual o total de votos para o candidato Y?"))
votosBranco = Number(prompt("Há quantos votos brancos?"))
votosNulo = Number(prompt("E quantos votos nulos?"))

alert("Cálculando...")

soma = votosCandidato_X + votosCandidato_Y + votosBranco + votosNulo

percentual_X = (votosCandidato_X / totalDeEleitores) * 100
percentual_Y = (votosCandidato_Y / totalDeEleitores) * 100
percentual_Branco = (votosBranco / totalDeEleitores) * 100
percentual_Nulo = (votosNulo / totalDeEleitores) * 100

alert("Na sua eleição houve o seguinte total de eleitores e votos: \n\nTotal de Eleitores: "+totalDeEleitores+"\nTotal de Votos: "+soma+"\n\nCaso tenha mais votos do que eleitores, pode ser que houve um erro na hora de digitar os votos ou uma fraude na eleição! Senão, está tudo certo.")

alert("Percentual(%) de votos: \n\nTotal de votos no candidato X: "+percentual_X+"%"+"\n\nTotal de votos no candidato Y: "+percentual_Y+"%"+"\n\nTotal de votos em branco: "+percentual_Branco+"%"+"\n\nTotal de votos nulos: "+percentual_Nulo+"%")

