// input 
let numero = prompt('Inserisci un numero per calcolare il cubo dei primi N numeri:');
numero = parseInt(numero); 

if (!isNaN(numero)) {
    for (let i = 1; i <= numero; i++) {
        let cubo = i ** 3; // Calcola il cubo del numero corrente
        console.log(`Il cubo di ${i} è ${cubo}`);
    }
}