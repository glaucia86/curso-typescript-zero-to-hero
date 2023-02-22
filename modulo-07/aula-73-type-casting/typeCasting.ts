/**
 * arquivo: typeCasting.ts
 * descrição: arquivo responsável por ensinar uso de 'Type Casting' em TypeScript
 * data: 01/26/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

// ==> Exemplo 01 - Type Casting: 'as'

const nome: unknown = 'Glaucia Lemos';
console.log((nome as string).toLowerCase());

// ==> Exemplo 02 - Type Casting: '<>'
const carro = 'Corolla';

const tamanhoString: number = (<string>carro).length;

console.log('O tamanho da string é...: ', tamanhoString);


