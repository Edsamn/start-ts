"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_model_1 = __importDefault(require("./model/produto.model"));
const produto1 = new produto_model_1.default("Caneta", 2);
const produto2 = new produto_model_1.default("Lápis Velho", 0);
console.log(produto1);
produto1.imprimir();
produto2.imprimir();
function getActive(produto) {
    if (produto.ativo) {
        console.log(`O produto já está ativo`);
    }
    else {
        produto.ativar();
    }
}
getActive(produto1);
getActive(produto2);
produto2.alterarPreco(5);
produto2.imprimir();
produto1.aumentarEstoque();
produto1.imprimir();
produto1.diminuirEstoque();
produto1.imprimir();
produto1.aumentarPorQuantidade(50);
produto1.imprimir();
produto1.diminuirPorQuantidade(100);
produto1.imprimir();
produto1.diminuirPorQuantidade(100);
produto1.imprimir();
