/**
 * arquivo: extendsInterfaces.ts
 * descrição: arquivo responsável por ensinar uso de 'extends' e 'implements' em TypeScript
 * data: 12/12/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

exports = {};
// ==> Exemplo 01 - Interfaces com extends
interface Animal_01 {
  nome: string;
  idade: number;
  porte: string;
}

interface Cachorro_01 extends Animal_01 {
  raca: string;
}

const cachorro: Cachorro_01 = {
  nome: 'Prince',
  idade: 2,
  porte: 'Médio',
  raca: 'Spiz Alemao',
};

console.log(cachorro);

// ==> Exemplo 02 - Extensão de Múltiplas Interfaces

interface Cachorro {
  nome: string;
}

interface Gato {
  nome: string;
}

interface Animal extends Cachorro, Gato {
  idade: number;
}

const animal: Animal = {
  nome: 'Farofa',
  idade: 5,
};

console.log(animal);

// ==> Exemplo 03 - Uso do Omit

interface Funcionario {
  id: number;
  nome: string;
  salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
  id: string;
  salario: string;
  linguageProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'js-123',
  nome: 'Glaucia Lemos',
  salario: '10k',
  linguageProgramacao: 'JavaScript',
}

console.log(desenvolvedor)

// Exemplo 04 - Uso do pipe

/*interface Funcionario {
  id: number | string;
  nome: string;
  salario: number | string;
}

interface Desenvolvedor extends Funcionario {
  id: string;
  salario: string;
  linguageProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'js-123',
  nome: 'Glaucia Lemos',
  salario: '10k',
  linguageProgramacao: 'JavaScript',
}

console.log(desenvolvedor)*/