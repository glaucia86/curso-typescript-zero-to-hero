/**
 * arquivo: typeAssertion.ts
 * descrição: arquivo responsável por ensinar uso de 'Type Assertion' em TypeScript
 * data: 02/21/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

// ==> Exemplo 01 - Type Assertions (as / < >)

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
  const precoComDesconto = preco * (1 - desconto);

  return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

// const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;
const descontoFinal = <number>exibirPrecoFinal(100, 0.05, false);
console.log(descontoFinal);


// ==> Exemplo 02 - Type Assertions

/*type Humano = {
  nome: string;
  idade: number;
  idioma: string;
}

const humano = {
  idade: 36,
  idioma: 'Português'
};

const humano_02 = humano as Humano;
console.log(humano_02.nome.toUpperCase());*/

/*type Humano = {
  nome: string;
  idade: number;
  idioma: string;
}

const humano = {
  idade: 36,
  idioma: 'Português'
};

const humano_02: Humano = humano;
console.log(humano_02.nome.toUpperCase());*/