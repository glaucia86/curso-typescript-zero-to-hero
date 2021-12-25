/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/**
 * arquivo: ifElse.ts
 * descrição: arquivo responsável por ensinar como usar instrução if-else no Typescript
 * data: 07/12/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

// ==> Exemplo 01 - Uso do if

const numeroMax = 100;
let contador = 100;

if (contador < numeroMax) {
  contador++
}

console.log(contador);

// ==> Exemplo 02 - Uso do if

const permissaoIdadeDirigir = 16;

if (permissaoIdadeDirigir >= 18) {
  console.log('Você está habilitado para dirigir!')
}

// ==> Exemplo 03 - Uso do if-else

const permissaoIdadeDirigir01 = 18;

if (permissaoIdadeDirigir01 <= 17) {
  console.log('Você está habilitado para dirigir!')
} else {
  console.log('Você não está habilitado para dirigir!')
}

//==> Exemplo 04 - if... else if

let desconto: number;

let valorCompra = 14;

if (valorCompra > 0 && valorCompra <= 5) {
  desconto = 5;
} else if (valorCompra > 5 && valorCompra <= 10) {
  desconto = 10;
} else {
  desconto = 15;
}

console.log(`Você teve um desconto de...: ${desconto}% desconto`);

// ==> Exemplo 05 - Ternário (? :) - if...else

/*const idadeVotacao = 18;

if (idadeVotacao >= 18) {
  console.log('Você é elegível para votar.')
} else {
  console.log('Você não é elegível para votar.')
}*/

// ==> Ternário
const idadeVotacao = 16;

const podeVotar = (idadeVotacao >= 18) ? 'Você é elegível para votar.' : 'Você não é elegível para votar.'

console.log(podeVotar)
