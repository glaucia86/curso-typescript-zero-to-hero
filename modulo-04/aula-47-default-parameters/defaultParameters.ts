/**
 * arquivo: defaultParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Default Parameters' em funções no no Typescript
 * data: 29/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export {};

// ==> Exemplo 01 - Default Parameters
function descontoCompra(preco: number, desconto = 0.08) {
  return preco * (1 - desconto);
}

console.log(descontoCompra(100)); //92

// ==> Exemplo 02
function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal!') {
  return saudar + ' ' + mensagem + '!';
}

console.log(exibirMensagem('JavaScript Developers'));

// ==> Exemplo 03
function exibirNome(nome: string, sobrenome = 'Lemos') {
  return nome + ' ' + sobrenome;
}

const resultado_1 = exibirNome('Glaucia');
const resultado_2 = exibirNome('Glaucia', undefined);
// const resultado_3 = exibirNome('Glaucia', 'de Souza', 'Senhorita');
const resultado_4 = exibirNome('Glaucia', 'de Souza');

console.log(resultado_1);
console.log(resultado_2);
// console.log(resultado_3);
console.log(resultado_4);
