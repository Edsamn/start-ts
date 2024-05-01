import Animal from "./Animal";

class Gato extends Animal {
  private nome: string;
  private cor: string;

  constructor(nome: string, cor: string, raca: boolean) {
    super("Mamífero", raca);
    this.nome = nome;
    this.cor = cor;
  }

  emitirSom(): void {
    console.log("Miau...");
  }

  trocarNome(novoNome: string): void {
    this.nome = novoNome;
  }
}

export default Gato;
