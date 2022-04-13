/**
 * arquivo: accessModifier.ts
 * descrição: arquivo responsável por ensinar como usar o 'Modificadores de
 * Acesso' no Typescript
 * data: 12/04/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export {};

// ==> Exemplo 01- Modificador: public
class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;
}

const estudante = new Estudante();
estudante.codigoEstudante = 201;
estudante.nomeEstudante = 'Glaucia Lemos';

console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);

// ==> Exemplo 02 - Modificador: private
class Estudante_02 {
  codigoEstudante: number;
  nomeEstudante: string;
  private idade: number;

  constructor(codigEstudante: number, nomeEstudante: string, idade: number) {
    this.codigoEstudante = codigEstudante;
    this.nomeEstudante = nomeEstudante;
    this.idade = idade;
  }

  retornarDadosEstudante() {
    return `Código do Aluno...: ${this.codigoEstudante}.
      Nome do Estudante...: ${this.nomeEstudante}.
      Idade do Estudante...: ${this.idade}`;
  }
}

const estudante_02 = new Estudante_02(98765, 'Glaucia Lemos', 35);
console.log(estudante_02.retornarDadosEstudante());

// ==> Exemplo 03 - Modificador: protected
class Estudante_03 {
  codigoEstudante: number;
  protected nomeEstudante: string;

  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }
}

class Pessoa extends Estudante_03 {
  private curso: string;

  constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
    super(codigoEstudante, nomeEstudante);
    this.curso = curso;
  }

  retornarDados() {
    return `Código do Aluno: ${this.codigoEstudante}.
    Nome do Estudante: ${this.nomeEstudante}.
    Matéria: ${this.curso}`;
  }
}

const estudante_03 = new Pessoa(783212, 'Glaucia Lemos', 'Matemática');
console.log(estudante_03.retornarDados());
