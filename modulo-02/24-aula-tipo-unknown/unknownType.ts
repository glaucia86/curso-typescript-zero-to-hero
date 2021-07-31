/**
 * arquivo: unknownType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Uknown'
 * data: 27/07/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
 */

// ==> Exemplo 01: Tipo Unknown

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';

// console.log(valorVariavel);

// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!

/*let valor: unknown;

let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;*/

// ===> Exemplo 03: diferença entre: 'any' vs 'unknown'

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed());

if (typeof algumaCoisaUnknown === 'number') {
  console.log(algumaCoisaUnknown.toFixed());
}
