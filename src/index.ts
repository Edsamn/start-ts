import Cachorro from "./model/Cachorro";
import Conta from "./model/Conta";
import ContaKids from "./model/ContaKids";
import Gato from "./model/Gato";

const msg: string = "Hello world";

const enable: boolean = true;

function table(number: number) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${index} x ${number} = ${index * number}`);
  }
}
table(9);

interface Student {
  id: number;
  name: string;
  enable: boolean;
}

const student: Student = {
  id: 5,
  name: "Marcelo",
  enable: true,
};

function printStudent(student: Student) {
  console.log(`Id: ${student.id}`);
  console.log(`Nome: ${student.name}`);
  console.log(`Ativo: ${student.enable}`);
}
printStudent(student);

const turma: Student[] = [];

const minhaConta = new Conta(1);
const contaKids = new ContaKids(minhaConta.retornaNumeroConta(), 20, 2);
minhaConta.deposito(1000);
contaKids.deposito(1000);
console.log(minhaConta);
console.log(contaKids);

const luly = new Cachorro("Vira-lata", "Luly", false);
luly.respirar();
const frajola = new Gato("Frajola", "Preto", true);
frajola.respirar();
