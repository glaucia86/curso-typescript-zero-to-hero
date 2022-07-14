/* eslint-disable prettier/prettier */
/**
 * arquivo: readonlyModifier.ts
 * descrição: arquivo responsável por ensinar como usar o 'Modificadores de
 * Acesso Readonly' no Typescript
 * data: 13/07/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

// ==> Exemplo 01
class Funcionario {
  readonly dataNascimento: Date;

  constructor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

const funcionario = new Funcionario(new Date(1986, 10, 24));
// funcionario.dataNascimento = new Date(1986, 10, 24);

// ==> Exemplo 02

class Funcionario_01 {
  constructor(readonly dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

// ==> Exemplo 03

class Funcionario_03 {
  nome: string;
  readonly codigoFuncionario: number;

  constructor(nome: string, codigo: number) {
    this.codigoFuncionario = codigo;
    this.nome = nome;
  }
}

const func = new Funcionario_03('Glaucia', 112233);
func.nome = 'Glaucia Lemos';
// func.codigoFuncionario = 113344;

console.log(func);

// ==> Exemplo 04 - Interface

interface IFuncionario {
  codigoFuncionario: number;
  nomeEmpregado: string;
}

const funcionario_01: Readonly<IFuncionario> = {
  codigoFuncionario: 506699,
  nomeEmpregado: 'Jurema',
};

// funcionario_01.codigoFuncionario = 887653;
// funcionario_01.nomeEmpregado = 'Lemos';

const funcionario_02: IFuncionario = {
  codigoFuncionario: 506699,
  nomeEmpregado: 'Jurema',
};

funcionario_02.codigoFuncionario = 887653;
funcionario_02.nomeEmpregado = 'Lemos';
