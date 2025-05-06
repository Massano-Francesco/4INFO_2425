class libro {
    constructor(titolo,autore,anno) {
        this.titolo = titolo;
        this.autore = autore;
        this.anno = anno;
    }

    dettagli(){
        console.log(`il libro di ${this.autore} si chiama ${this.titolo} anno ${this.anno}`)
    }

    comparareAnno(l1,l2){
        return l1 > l2 ? l1 : l2
    }


}


let l1 = new libro('matrix','james', 2007);
let l2 = new libro('sitema','nig', 2009);

let risultato = l1.comparareAnno(l1,l2);
console.log(risultato);


