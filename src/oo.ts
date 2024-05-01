import Produto from "./model/produto.model";

const produto1 = new Produto("Caneta", 2);
const produto2 = new Produto("Lápis Velho", 0);

console.log(produto1);

produto1.imprimir();
produto2.imprimir();

function getActive(produto: Produto) {
  if (produto.ativo) {
    console.log(`O produto já está ativo`);
  } else {
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
