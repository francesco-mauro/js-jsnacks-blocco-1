// inizializzo le variabili 
let base = 2;
let risultato = 1;
let i = 0;

// logica
while (risultato <= 1000) {
    risultato = base ** i; 
    if (risultato <= 1000) {
        console.log(`2 elevato alla ${i} è ${risultato}`);
    }
    i++;
}