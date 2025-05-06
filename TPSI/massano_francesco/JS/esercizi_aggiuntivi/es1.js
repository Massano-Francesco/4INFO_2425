function divisione(n) {
    try {
        if (!isNaN(n)) {
            return n/2;
        }
        else{
            return 'errore';
        }
    } catch (error) {
        console.log('errroe')
    }
}

console.log(divisione(1));
console.log(divisione('dhfd'));
console.log(divisione(30));