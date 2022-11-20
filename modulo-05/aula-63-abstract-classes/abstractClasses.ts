/**
 * arquivo: abastractClasses.ts
 * descrição: arquivo responsável por ensinar uso de classes abstratas no TypeScript
 * data: 11/18/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

abstract class Funcionario {
  constructor(private nome: string, private sobrenome: string) { }

  abstract retornarSalario(): number;
  get retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  emitirContraCheque(): string {
    return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
  }
}

class FuncionarioCLT extends Funcionario {
  constructor(nome: string, sobrenome: string, private salario: number) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.salario;
  }
}

class FuncionarioPJ extends Funcionario {
  constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.valorHora * this.horasTrabalhadas;
  }
}

const glaucia = new FuncionarioCLT('Glaucia', 'Lemos', 18000);
const joao = new FuncionarioPJ('João', 'Silva', 150, 160);

console.log(glaucia.emitirContraCheque());
console.log(joao.emitirContraCheque());

// const funcionario = new Funcionario('Glaucia', 'Lemos');