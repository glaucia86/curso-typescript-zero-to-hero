/**
 * arquivo: anyType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Any'
 * data: 27/07/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
 */

// ==> Exemplo 01: Tipo Any
const a: any = 34;
const b: any = ['Glaucia'];

const result = a + b;
console.log(result);

// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/

// ==> Exemplo 03: Quando devemos usar o tipo any?!

const formulario: { [campoFomulario: string]: any } = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 34,
};

console.log(formulario);
