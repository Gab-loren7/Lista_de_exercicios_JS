/*As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez. Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.*/

/*
    Vivem = 200 anos
    reprodução = 4 anos = 1 filhote
*/

let vitaTotal = 200;
let anosParaReproduzir = 4
let filhotesPorReprodução = 1
let totalDeFilhotes
let mediaDeFilhotes

alert("As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.");

totalDeFilhotes = vitaTotal / anosParaReproduzir
mediaDeFilhotes = totalDeFilhotes / 10

alert("Logo, as baleias tem "+totalDeFilhotes+" filhotes em toda a sua vida.")
alert("E uma média de "+mediaDeFilhotes+" filhotes por década.")

