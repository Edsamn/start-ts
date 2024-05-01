"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = __importDefault(require("./model/Cachorro"));
const Conta_1 = __importDefault(require("./model/Conta"));
const ContaKids_1 = __importDefault(require("./model/ContaKids"));
const Gato_1 = __importDefault(require("./model/Gato"));
const msg = "Hello world";
const enable = true;
function table(number) {
    for (let index = 1; index <= 10; index++) {
        console.log(`${index} x ${number} = ${index * number}`);
    }
}
table(9);
const student = {
    id: 5,
    name: "Marcelo",
    enable: true,
};
function printStudent(student) {
    console.log(`Id: ${student.id}`);
    console.log(`Nome: ${student.name}`);
    console.log(`Ativo: ${student.enable}`);
}
printStudent(student);
const turma = [];
const minhaConta = new Conta_1.default(1);
const contaKids = new ContaKids_1.default(minhaConta.retornaNumeroConta(), 20, 2);
minhaConta.deposito(1000);
contaKids.deposito(1000);
console.log(minhaConta);
console.log(contaKids);
const luly = new Cachorro_1.default("Vira-lata", "Luly", false);
luly.respirar();
luly.trocarNome("Luluzinha");
const frajola = new Gato_1.default("Frajola", "Preto", true);
frajola.respirar();
