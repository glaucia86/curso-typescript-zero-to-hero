/* eslint-disable prefer-const */
/**
 * arquivo: nullUndefinedType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre os tipos 'null' e 'undefined'
 * data: 14/09/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html
 */

// ==> Exemplo 01: Null

let variavelTesteNull = null;

console.log(variavelTesteNull);
console.log(typeof variavelTesteNull);

// ==> Exemplo 02: Undefined

let variavelTesteUndefined;

console.log(variavelTesteUndefined);
console.log(typeof variavelTesteUndefined);

// ==> Diferenças e Similaridades: Null vs Undefined

console.log('Exemplo 01:', null == undefined);
console.log('Exemplo 02:', null === undefined);
