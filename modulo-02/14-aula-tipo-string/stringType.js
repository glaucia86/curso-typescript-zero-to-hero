"use strict";
/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 14/03/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Single Quotes
let nomeCompleto = 'Glaucia Lemos';
console.log(nomeCompleto);
// ==> Exemplo 02 - Double Quotes
let funcaoEmpresa = "Cloud Advocate em JavaScript";
console.log(funcaoEmpresa);
// ==> Exemplo 03 - Back Ticks
let nomeEmpresa = 'Microsoft';
let dadosFuncionario = `Seja bem-vinda ${nomeCompleto}! Você será ${funcaoEmpresa} 
    na empresa ${nomeEmpresa}`;
console.log(dadosFuncionario);
