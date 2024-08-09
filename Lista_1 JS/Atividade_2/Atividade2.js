let arroz;
let batataPalha;
let sucoDeGarrafa;
let subtrair;

alert("Em sua lista de compras você possui os seguintes itens: Arroz, Batata Palha e Suco de Garrafa.");

alert("Preciso que vc diga os valores dos seguintes itens, ok?")

arroz = Number(prompt("Digite o valor do arroz:"));
batataPalha = Number(prompt("Digite o valor da Batata Palha:"));
sucoDeGarrafa = Number(prompt("Digite o valor do Suco de Garrafa:"));

alert("Obrigado. Vi que você possui R$ 100,00 em seu saldo. Irei realizar o cálculo para o troco");

subtrair = 100 - arroz - batataPalha - sucoDeGarrafa;

alert("Seu troco será de: " + subtrair);