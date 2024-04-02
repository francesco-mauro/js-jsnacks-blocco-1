let somma = 0;

for (let i = 0; i < 10; i++) {
    // let numero = prompt("Inserisci un numero (" + (i + 1) + "/10):");
    let numero = prompt(`Inserisci un numero (${i + 1}/10):`);
    numero = parseInt(numero);
    
    if (!isNaN(numero)) {
        somma += numero;
        // console.log(`Iterazione ${i + 1}: Numero inserito = ${numero}, Somma parziale = ${somma}`);
        } else {
        alert("Per favore, inserisci solo un numero, non lettere, non altro che questo coso si regge con sputo e preghiere");
        i--;
    }
}

// console.log("La somma dei numeri inseriti è: " + somma);
console.log(`La somma finale dei numeri inseriti è: ${somma}`);