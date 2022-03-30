/**
 * arquivo: restParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Rest Parameters' em funções no no Typescript
 * data: 29/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export {};

// ==> Exemplo 01
function somarNumeros(...numeros: number[]) {
  let total = 0;
  numeros.forEach((numero) => (total += numero));

  return total;
}

console.log(somarNumeros(30, 20));
console.log(somarNumeros(40, 50, 50, 40, 20));

// ==> Exemplo 02
function listarFrutas(frase: string, ...frutas: string[]) {
  return frase + ' ' + frutas.join(', ');
}

console.log(
  listarFrutas(
    'Glaucia, você precisa ir na feira para comprar...:',
    '🥥',
    '🍓',
    '🍌',
    '🍍',
  ),
);

// ==> Exemplo 03
class Produtos {
  public exibirProdutos(...produtos: string[]): void {
    for (const produto of produtos) {
      console.log(produto);
    }
  }
}

const departamentoInformatica: Produtos = new Produtos();
console.log(
  'Todos os produtos do departamento de Informatica disponíveis no estoque...: ',
);

departamentoInformatica.exibirProdutos(
  'Mouse',
  'Notebook',
  'USB',
  'Monitor',
  'Teclado',
  'WebCam',
);
