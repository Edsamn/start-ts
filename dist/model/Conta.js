"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBanco_1 = __importDefault(require("./ContaBanco"));
class Conta extends ContaBanco_1.default {
    constructor(numeroConta) {
        super();
        this.saldo = 0;
        this.numeroConta = new Date().getTime();
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }
    retornaSaldo() {
        return this.saldo;
    }
    retornaNumeroConta() {
        return this.numeroConta;
    }
    aviso() {
        console.log("Conta Normal");
    }
    imrpimirConta() {
        console.log("Imprimindo...");
    }
}
exports.default = Conta;
