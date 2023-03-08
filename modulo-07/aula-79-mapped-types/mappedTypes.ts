/**
 * arquivo: mappedTypes.ts
 * descrição: arquivo responsável por ensinar uso de 'Mapped Types' em TypeScript
 * data: 03/04/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };


// ==> Exemplo 01: Mapped Types

type Usuario = {
  nome: string;
  endereco: string;
  telefone: string;
  idade: number;
};

type UsuarioOpcional = {
  nome?: string;
  endereco?: string;
  telefone?: string;
  idade?: number;
};

type UsusarioSomenteLeitura = {
  readonly nome: string;
  readonly endereco: string;
  readonly telefone: string;
  readonly idade: number;
};

// { [P in K]: T }

type UsuarioMappedType = {
  [P in keyof Usuario]?: Usuario[P]; // for in
};

// 'nome' | 'endereco' | 'telefone' | 'idade'

const usuarioMapped: UsuarioMappedType = {
  nome: 'Glaucia Lemos',
  endereco: 'Rua 01, 123',
}

console.log(usuarioMapped);

// ==> Exemplo 02: Outros Tipos Avançados

interface Livro {
  titulo: string;
  autor: string | null;
  preco: number;
  numeroPaginas: number;
}

type Artigo = Omit<Livro, 'numeroPaginas'>;

type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
  autor: 'Boris Cherny',
  numeroPaginas: 324,
  preco: 19.99,
  titulo: 'Programming Typescript: Making Your JavaScript Applications Scale'
}

// livro.autor = "Glaucia Lemos"