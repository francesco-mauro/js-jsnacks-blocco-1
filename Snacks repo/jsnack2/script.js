const invitati = ['Pippo', 'Pluto', 'Paperino', 'Qui', 'quo', 'Qua'];
// Input 
// Chiedi all'utente il suo nome
const nomeUtente = prompt('Inserisci il tuo nome per verificare se sei nella lista degli invitati:');

let trovato = false;

// Cicla attraverso l'array degli invitati per verificare se il nome dell'utente è presente
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === nomeUtente) {
        trovato = true;
        // console.log(`controllo prima del brak ${i}: ${invitati[i]}`);
        break; 
    }
    // console.log(`controllo dopo il break ${i}: ${invitati[i]}`); 
}

// Output
if (trovato) {
    alert('Sei nella lista degli invitati. Puoi partecipare alla festa.');
    // console.log('Sei nella lista degli invitati. Puoi partecipare alla festa.');
} else {
    alert('Mi dispiace, il tuo nome non è nella lista degli invitati. Non puoi partecipare alla festa.');
    // console.log('Mi dispiace, il tuo nome non è nella lista degli invitati. Non puoi partecipare alla festa.');
}