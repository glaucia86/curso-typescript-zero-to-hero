/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/**
 * arquivo: switch-case.ts
 * descrição: arquivo responsável por ensinar como usar instrução switch-case no Typescript
 * data: 23/12/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

// ==> Exemplo 01 - Uso do switch...case

let flor = 'tulipa';

switch (flor) {
  case 'rosa':
    console.log('Rosas são vermelhas');
    break;
  case 'violeta':
    console.log('Violetas são azuis');
    break;
  case 'tulipa':
    console.log('Tulipas são brancas');
    break;

  default:
    console.log('Por favor, selecione uma outra flor!');
}

// ==> Exemplo 02 - Uso do switch...case

let diaUtilSemana = 5;

switch (diaUtilSemana) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Segunda');
    break;
  case 2:
    console.log('Terça');
    break;
  case 3:
    console.log('Quarta');
    break;
  case 4:
    console.log('Quinta');
    break;
  case 5:
    console.log('Sexta');
    break;

  default:
    console.log('Não é um dia útil');
}
