abstract class Animal {
  protected tipo: "Ave" | "Réptil" | "Mamífero";
  protected raca: boolean;

  constructor(tipo: "Ave" | "Réptil" | "Mamífero", raca: boolean) {
    this.tipo = tipo;
    this.raca = raca;
  }

  abstract emitirSom(): void;

  abstract trocarNome(novoNome: string): void;

  public respirar(): void {
    console.log("Respirando...");
  }
}

export default Animal;
