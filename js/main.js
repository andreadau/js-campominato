// Array vuoto che conterrà numeri random
var arrRandom = [];
// While per generazione numeri random
while(arrRandom.length < 16){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arrRandom.indexOf(r) === -1) arrRandom.push(r);
}
console.log(arrRandom);
// Dichiarazione array con numero utente e score
var arrUtente = [];
var score = 0;
// Ciclo for per chiedere all'utente tot numeri
for (var i = 0 ; arrUtente.length < 84; i++) {
    var numeriUtente = Number(prompt("Inserisci tot numeri"));
    if (numeriUtente < 1 || numeriUtente > 100) {
        alert("Non inserire un numero maggiore di 100, minore di 1, ritenta");
    } else if (isNaN(numeriUtente)) {
        alert("Non inserire una parola ma un numero, ritenta")
    }
    else if (arrUtente.includes(numeriUtente)) {
        alert("Non inserire due numeri uguali, ritenta");
    } else if (arrRandom.includes(numeriUtente)) {
        alert("Hai Perso !");
        break;
    } else {
        arrUtente.push(numeriUtente);
        score += 1;
    }
}
// console dell'array utente
console.log(arrUtente);
// Console Score 
console.log("Score totalizzato :", score);
// Alert dello score realizzato
alert("Lo score totalizzato è : " + score + " punti");