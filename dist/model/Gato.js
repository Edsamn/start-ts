"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Gato extends Animal_1.default {
    constructor(nome, cor, raca) {
        super("Mamífero", raca);
        this.nome = nome;
        this.cor = cor;
    }
    emitirSom() {
        console.log("Miau...");
    }
}
exports.default = Gato;
