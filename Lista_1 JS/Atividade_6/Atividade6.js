/* Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro). Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final. */

let mediaKmCombustivel
let kmPercorrido
let combustivelGasto

kmPercorrido = Number(prompt("Quantos Quilômetros foram percorridos?"))
CombusGasto = Number(prompt("Quantos litros de combustível foram gastos?"))

mediaKmCombustivel = kmPercorrido / combustivelGasto

alert("O total de combustivel comsumido por quilómetro é: "+mediaKmCombustivel)