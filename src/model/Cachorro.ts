import Animal from "./Animal";

class Cachorro extends Animal {
  private nomeRaca: string;
  private nome: string;

  constructor(nomeRaca: string, nome: string, raca: boolean) {
    super("Mamífero", raca);
    this.nomeRaca = nomeRaca;
    this.nome = nome;
  }

  emitirSom(): void {
    console.log("Auauauauau...");
  }

  trocarNome(novoNome: string): void {
    this.nome = novoNome;
  }
}

export default Cachorro;
