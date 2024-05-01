import Conta from "./Conta";

class ContaKids extends Conta {
  private numeroContaKids: string;
  private limite: number;

  constructor(numeroContaPai: number, limite: number, numeroContaKids: number) {
    super(numeroContaPai);
    this.numeroContaKids = new Date().getTime() + "-K";
    this.limite = limite;
  }

  imprimirContaKids() {
    console.log("Conta pai: ", this.numeroConta);
    console.log("Limite: ", this.limite);
    console.log("Saldo: ", this.retornaSaldo());
  }

  public aviso(): void {
    console.log("Conta kids");
  }

  public imrpimirConta(): void {
    console.log("Imprimindo...");
  }
}

export default ContaKids;
