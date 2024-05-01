"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco, ativo = true, estoque = 0) {
        this.id = new Date().getTime();
        this.nome = nome;
        this.preco = preco;
        this.ativo = ativo;
        this.estoque = estoque;
    }
    desativar() {
        this.ativo = false;
        console.log("Produto desativado com sucesso.");
    }
    ativar() {
        this.ativo = true;
        console.log("Produto ativado com sucesso.");
    }
    imprimir() {
        console.log(`
      Id: ${this.id}
      Nome: ${this.nome}    
      Preço: ${this.preco}
      Ativo: ${this.ativo ? "Sim" : "Não"}
      Estoque: ${this.estoque}
    `);
    }
    alterarPreco(preco) {
        this.preco = preco;
    }
    aumentarEstoque() {
        this.estoque++;
    }
    diminuirEstoque() {
        if (this.estoque === 0) {
            console.log(`O estoque está zerado`);
        }
        else {
            this.estoque--;
        }
    }
    aumentarPorQuantidade(estoque) {
        this.estoque += estoque;
    }
    diminuirPorQuantidade(estoque) {
        if (this.estoque - estoque < 0) {
            console.log(`O estoque está em: ${this.estoque}`);
        }
        else {
            this.estoque -= estoque;
        }
    }
}
exports.default = Produto;
