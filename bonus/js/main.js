// scelta difficoltà utente
var difficolta = prompt("Scegli la difficoltà tra Normale | Difficile | Estrema").toLowerCase();
// Controllo difficolta utente
while (difficolta != "normale" && difficolta != "difficile" && difficolta != "estrema") {
    difficolta = prompt("Scegli solo tra Normale | Difficile | Estrema");
}
switch (difficolta) {
    // DIFFICOLTA NORMALE
    case "normale":
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
        break;
    // DIFFICOLTA DIFFICILE
    case "difficile":
         // Array vuoto che conterrà numeri random
         var arrRandom = [];
         // While per generazione numeri random.
         while(arrRandom.length < 16){
             var r = Math.floor(Math.random() * 80) + 1;
         if(arrRandom.indexOf(r) === -1) arrRandom.push(r);
         }
         console.log(arrRandom);
         // Dichiarazione array con numero utente e score
         var arrUtente = [];
         var score = 0;
         // Ciclo for per chiedere all'utente tot numeri
         for (var i = 0 ; arrUtente.length < 64; i++) {
             var numeriUtente = Number(prompt("Inserisci tot numeri"));
             if (numeriUtente < 1 || numeriUtente > 80) {
                 alert("Non inserire un numero maggiore di 80, minore di 1, ritenta");
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
         break;
    // DIFFICOLTA ESTREMA
    case "estrema":
        // Array vuoto che conterrà numeri random
        var arrRandom = [];
        // While per generazione numeri random.
        while(arrRandom.length < 16){
            var r = Math.floor(Math.random() * 50) + 1;
        if(arrRandom.indexOf(r) === -1) arrRandom.push(r);
        }
        console.log(arrRandom);
        // Dichiarazione array con numero utente e score
        var arrUtente = [];
        var score = 0;
        // Ciclo for per chiedere all'utente tot numeri
        for (var i = 0 ; arrUtente.length < 34; i++) {
            var numeriUtente = Number(prompt("Inserisci tot numeri"));
            if (numeriUtente < 1 || numeriUtente > 50) {
                alert("Non inserire un numero maggiore di 50, minore di 1, ritenta");
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
        break;
}
// Console Difficoltà
console.log(difficolta);
// Console dell'array utente
console.log(arrUtente);
// Console Score 
console.log("Score totalizzato :", score);
// Alert dello score realizzato
alert("Lo score totalizzato è : " + score + " punti");