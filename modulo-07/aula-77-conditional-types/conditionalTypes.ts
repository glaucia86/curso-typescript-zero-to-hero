/**
 * arquivo: typeAssertion.ts
 * descrição: arquivo responsável por ensinar uso de 'Conditional Types' em TypeScript
 * data: 03/01/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export = {};


// ==> Exemplo 01 - Conditional Types
type Pessoa = {
  nome: string;
  idade: number;
  endereco: string;
};

type Empresa = {
  nome: string;
  cnpj: number;
};

type EnderecoPessoa = {
  enderecoSecundario: string;
  cidade: string;
  pais: string;
};

type EnderecoEmpresa = {
  localizacao: 'rua' | 'avenida' | 'praça';
};

type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
  enderecoSecundario: 'Rua 2',
  cidade: 'São Paulo',
  pais: 'Brasil',
};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
  localizacao: 'rua',
};

console.log(enderecoPessoa);
console.log(enderecoEmpresa);

// ==> Exemplo 02 - Conditional Types ()

type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3';

type FiltrarArquivoAudio<T> = T extends 'mp4' | 'mp3' ? T : never;

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>;

const arquivoAudio: ArquivoAudio = 'mp4';

console.log(arquivoAudio);

