"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    constructor(nomeRaca, nome, raca) {
        super("Mamífero", raca);
        this.nomeRaca = nomeRaca;
        this.nome = nome;
    }
    emitirSom() {
        console.log("Auauauauau...");
    }
    trocarNome(novoNome) {
        this.nome = novoNome;
    }
}
exports.default = Cachorro;
