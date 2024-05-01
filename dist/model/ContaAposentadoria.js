"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBanco_1 = __importDefault(require("./ContaBanco"));
class ContaAposentadoria extends ContaBanco_1.default {
    constructor() {
        super();
        this.saldo = 0;
        this.numeroConta = new Date().getTime();
    }
    aviso() {
        console.log("Conta Aposentadoria");
    }
    imrpimirConta() {
        console.log("Imprimindo...");
    }
}
exports.default = ContaAposentadoria;
