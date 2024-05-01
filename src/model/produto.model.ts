class Produto {
  id: number;
  nome: string;
  preco: number;
  ativo: boolean;
  estoque: number;

  constructor(nome: string, preco: number, ativo = true, estoque = 0) {
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

  alterarPreco(preco: number) {
    this.preco = preco;
  }

  aumentarEstoque() {
    this.estoque++;
  }

  diminuirEstoque() {
    if (this.estoque === 0) {
      console.log(`O estoque está zerado`);
    } else {
      this.estoque--;
    }
  }

  aumentarPorQuantidade(estoque: number) {
    this.estoque += estoque;
  }

  diminuirPorQuantidade(estoque: number) {
    if (this.estoque - estoque < 0) {
      console.log(`O estoque está em: ${this.estoque}`);
    } else {
      this.estoque -= estoque;
    }
  }
}

export default Produto;
