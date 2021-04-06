"use strict";
/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
// pessoa = [34, 'Cloud Advocate JavaScript', 'Glaucia Lemos'];
console.log(pessoa);
// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa1[1]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2 = ['Glaucia Lemos', 'Cloud Advocate JavaScript', 34];
console.log(pessoa2);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
//==> Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// ==> Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Glaucia', 'Jurema'], [34, 68]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Glaucia', 'Lemos'));
console.log(criarPessoa('Glaucia', 'de Souza', 'Lemos'));
