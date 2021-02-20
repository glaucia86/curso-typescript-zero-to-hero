/**
 * arquivo: booleanType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Boolean'
 * data: 17/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01

let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

// ==> Exemplo 02

let concluido: boolean = false;

if (!concluido) {
    console.log('Tarefa foi concluída com sucesso!')
} else {
    console.log('Tarefa Pendente!');
}
