// array vuoto
let numeriDispari = [];

// input
for (let i = 0; i < 6; i++) {
    let numero = prompt('Inserisci un numero:');
    numero = parseInt(numero);

    if (numero % 2 !== 0) {
        numeriDispari.push(numero);
    }
}

console.log(numeriDispari);
// NaN è considerato un numero dispari?