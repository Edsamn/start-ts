"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(tipo, patas, dentes) {
        this.tipo = tipo;
        this.patas = patas;
        this.dentes = dentes;
    }
    respirar() {
        console.log("Respirando...");
    }
    andar() {
        console.log("Andando...");
    }
}
exports.default = Animal;
