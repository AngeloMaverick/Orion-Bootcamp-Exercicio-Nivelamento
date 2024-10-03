/*
    2 - Dado o array:

    let lista = new Array<Object> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

    ];
    a) Crie uma função que retorne a bio do id passado
    b) Crie uma função que retorne o name do id passado
    c) Crie uma função que apague um item da lista a partir de um id passado
    d) Crie uma função que altere a bio ou o name a partir de um id passado
    e) Demonstre todas as funções com o paradigma funcional e com o imperativo
*/

type Pessoa = {
  id: number;
  name: string;
  bio: string;
};

let lista: Array<Pessoa> = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
  },
  {
    id: 2,
    name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
  },
];

const getPessoaById = (id: number): Pessoa | undefined =>
  lista.find((pessoa) => pessoa.id === id);

const pessoaNotFound = "Pessoa não encontrada!";

// a) Crie uma função que retorne a bio do id passado
const getBioById = (id: number): string => {
  const pessoaEncontrada = getPessoaById(id);
  return pessoaEncontrada ? pessoaEncontrada.bio : pessoaNotFound;
};

// b) Crie uma função que retorne o name do id passado
const getNameById = (id: number): string => {
  const pessoaEncontrada = getPessoaById(id);
  return pessoaEncontrada ? pessoaEncontrada.name : pessoaNotFound;
};

// c) Crie uma função que apague um item da lista a partir de um id passado
const deleteById = (id: number): string => {
  const pessoaEncontrada = getPessoaById(id);
  if (pessoaEncontrada) {
    lista = lista.filter((pessoa) => pessoa.id !== id);
    return `A pessoa ${pessoaEncontrada.name} foi deletada com sucesso!`;
  } else {
    return pessoaNotFound;
  }
};

// d) Crie uma função que altere a bio ou o name a partir de um id passado
const updatePersonById = (
  id: number,
  field: keyof Pessoa,
  value: string
): string => {
  if (field === "id") return "Não é possível alterar o id de uma pessoa!";

  const pessoaEncontrada = getPessoaById(id);
  if (pessoaEncontrada) {
    pessoaEncontrada[field] = value;
    return `Dado alterado com sucesso!`;
  } else {
    return pessoaNotFound;
  }
};

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
// Creio que ja fiz todas com paradigma funcional, a seguir, as mesmas funções com paradigma imperativo.

const getBioByIdImperativo = (id: number): string => {
  const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
  if (pessoaEncontrada) {
    return pessoaEncontrada.bio;
  } else {
    return "Pessoa não encontrada!";
  }
};

const getNameByIdImperativo = (id: number): string => {
  const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
  if (pessoaEncontrada) {
    return pessoaEncontrada.name;
  } else {
    return "Pessoa não encontrada!";
  }
};

const deleteByIdImperativo = (id: number): string => {
  const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
  if (pessoaEncontrada) {
    lista = lista.filter((pessoa) => pessoa.id !== id);
    return `A pessoa ${pessoaEncontrada.name} foi deletada com sucesso!`;
  } else {
    return pessoaNotFound;
  }
};

const updatePersonByIdImperativo = (
  id: number,
  field: keyof Pessoa,
  value: string
): string => {
  if (field === "id") return "Não é possível alterar o id de uma pessoa!";

  const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
  if (pessoaEncontrada) {
    pessoaEncontrada[field] = value;
    return `Dado alterado com sucesso!`;
  } else {
    return pessoaNotFound;
  }
};
