/**
 * arquivo: typeGuards.ts
 * descrição: arquivo responsável por ensinar o uso de Type Guards em TypeScript
 * data: 01/12/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

exports = {};

// ==> Exemplo 01 - Type Guards: typeof
type alfanumerico = string | number;

function exibirTipo(a: alfanumerico, b: alfanumerico) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }

  throw new Error('Argumentos inválidos! Ambos os argumentos devem ser númericos ou string.');
}

console.log(exibirTipo('Glaucia', '2'));
console.log(exibirTipo(5, 5));
// console.log(exibirTipo('Lemos', 5));

// ==> Exemplo 02 - Type Guards: instanceof
class Carro {
  nome: string;
  marca: string;

  constructor(nome: string, marca: string) {
    this.nome = nome;
    this.marca = marca;
  }
}

class Moto {
  nome: string;
  ano: number;

  constructor(nome: string, ano: number) {
    this.nome = nome;
    this.ano = ano;
  }
}

function detalhesVeiculo(veiculo: Carro | Moto) {
  if (veiculo instanceof Carro) {
    return `O nome do carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`;
  } else if (veiculo instanceof Moto) {
    return `O nome da moto é: ${veiculo.nome} e o ano é: ${veiculo.ano}`;
  }
}

const carro = new Carro('Gol', 'Volkswagen');
console.log(detalhesVeiculo(carro));

const moto = new Moto('CBR', 2020);
console.log(detalhesVeiculo(moto));


// ==> Exemplo 03 - Type Guards: in
interface Animal_05 {
  grupo: string;
}

class Peixe implements Animal_05 {
  grupo: string;
  corPeixe: string;

  constructor(grupo: string, corPeixe: string) {
    this.grupo = grupo;
    this.corPeixe = corPeixe;
  }
}

class Passaro implements Animal_05 {
  grupo: string;
  corPena: string;

  constructor(grupo: string, corPena: string) {
    this.grupo = grupo;
    this.corPena = corPena;
  }
}

function nadar(grupo: string) {
  console.log(`O ${grupo} está nadando!`);
}

function voar(grupo: string) {
  console.log(`O ${grupo} está voando!`);
}

function mover(animal: Animal_05) {
  if ('corPeixe' in animal) {
    nadar((animal as Peixe).grupo);
  } else if ('corPena' in animal) {
    voar((animal as Passaro).grupo);
  }
}

mover(new Passaro('Pássaro', 'Vermelho'));
mover(new Peixe('Peixe', 'Azul'));