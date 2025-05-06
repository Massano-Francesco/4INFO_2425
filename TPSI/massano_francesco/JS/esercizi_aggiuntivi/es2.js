function calcolaEta(utente) {
    let data = new Date();
    let anno = data.getFullYear();
    let mese = data.getMonth() + 1;
    let giorno = data.getDate();
    let annoUtente = utente.dataDiNascita.getFullYear();
    let meseUtente = utente.dataDiNascita.getMonth() + 1;
    let giornoUtente = utente.dataDiNascita.getDate();
    annoUtente = anno - annoUtente;
    
}



let utente = {
    nome : 'francesco',
    cognome : 'massano',
    dataDiNascita : new Date('2007-01-04')
};

let eta = calcolaEta(utente);
//console.log(`${utente.nome} ${utente.cognome} ${eta} anni`);