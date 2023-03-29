/**
 * arquivo: generics.ts
 * descrição: arquivo responsável por ensinar uso do 'Generics' em TypeScript
 * data: 29/03/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

// ==> Exemplo 01: Generics

function retornarElementosRandomicos<T>(items: T[]): T {
  let itemRandomico = Math.floor(Math.random() * items.length);
  return items[itemRandomico];
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosRandomicos = retornarElementosRandomicos<number>(numeros);
console.log(numerosRandomicos);

let estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
let estadosRandomicos = retornarElementosRandomicos<string>(estados);
console.log(estadosRandomicos);

// ==> Exemplo 02: Generics

function exibirElementos<T>(array: T[]): void {
  array.forEach((elemento) => {
    console.log(elemento);
  });
};

let number: number[] = [1, 2, 3, 4, 5];
let states: string[] = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul'];

exibirElementos<number>(number);
exibirElementos<string>(states);