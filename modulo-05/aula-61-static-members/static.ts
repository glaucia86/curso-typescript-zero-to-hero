/**
 * arquivo: static.ts
 * descrição: arquivo responsável por ensinar uso de métodos e propriedades
 * estáticos no TypeScript
 * data: 16/08/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

// eslint-disable-next-line prettier/prettier
export { };

// ==> Exemplo 01: Propriedades Estáticas
class Funcionario {
  static contratacoes = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    // nome classe + nome propriedade
    Funcionario.contratacoes++;
  }
}

const funcionario_01 = new Funcionario('Glaucia', 'Lemos', 'Developer');
const funcionario_02 = new Funcionario('Jurema', 'Lemos', 'Professora');
console.log(Funcionario.contratacoes);


// ==> Exemplo 02 - Métodos estáticos
class Funcionario_01 {
  private static contratacoes = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    Funcionario_01.contratacoes++;
  }

  public static retornarContratacoes() {
    return Funcionario_01.contratacoes;
  }
}

const funcionario_01 = new Funcionario_01(
  'Glaucia',
  'Lemos',
  'Developer Advocate',
);

const funcionario_02 = new Funcionario_01('Jurema', 'Lemos', 'Professora');

console.log(Funcionario_01.retornarContratacoes());

// ==> Exemplo 03 - Propriedades estáticas
type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
  public nome: string;
  public idade: number;
  public racas: Raca[];
  public static QTD_CACHORRO_VENDIDO = 0;

  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome;
    this.idade = idade;
    this.racas = racas;

    Cachorro.QTD_CACHORRO_VENDIDO++;
    console.log(Cachorro.QTD_CACHORRO_VENDIDO);
  }

  public exibirInformacao(): void {
    console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
  }
}

const cachorro_01 = new Cachorro('Pipoca', 4, ['Spitz Alemão']);
const cachorro_02 = new Cachorro('Farofa', 6, ['Yorkshire']);
