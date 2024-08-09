/*Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), além de 1 bombom para o(a) professor(a). Faça um programa no qual seja digitado a quantidade de alunos da turma e mostrando quantos bombons no total devem ser comprados. */

let alunos
let bombons
let total
const professor = 1

alert("Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), além de 1 bombom para o(a) professor(a).")

alunos = Number(prompt("Quantos alunos a sala possuí?"))

bombons = alunos * 2

alert("Serão necessário " + bombons + " bombons para essa quantidade de alunos.")

alert("Não se esqueça que o professor também ganhara " + professor + " bombom.")

total = bombons + professor

alert("O total de bombons será de: " + total)
