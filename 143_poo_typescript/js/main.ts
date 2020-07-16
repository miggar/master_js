import { Camiseta } from './camiseta';

class Main {
    constructor() {
        console.log('loaded APP');
    }

    getCamiseta() {
        return new Camiseta("Blanco", "Manga corta", "Buena", "XL", 12);
    }

}

var main = new Main();