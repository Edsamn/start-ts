"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaKids extends Conta_1.default {
    constructor(numeroContaPai, limite, numeroContaKids) {
        super(numeroContaPai);
        this.numeroContaKids = new Date().getTime() + "-K";
        this.limite = limite;
    }
    imprimirContaKids() {
        console.log("Conta pai: ", this.numeroConta);
        console.log("Limite: ", this.limite);
        console.log("Saldo: ", this.retornaSaldo());
    }
    aviso() {
        console.log("Conta kids");
    }
    imrpimirConta() {
        console.log("Imprimindo...");
    }
}
exports.default = ContaKids;
