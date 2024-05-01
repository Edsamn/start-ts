import ContaBanco from "./ContaBanco";

class ContaAposentadoria extends ContaBanco {
  protected numeroConta: number;
  private saldo: number;

  constructor() {
    super();
    this.saldo = 0;
    this.numeroConta = new Date().getTime();
  }

  aviso(): void {
    console.log("Conta Aposentadoria");
  }

  imrpimirConta(): void {
    console.log("Imprimindo...");
  }
}

export default ContaAposentadoria;
