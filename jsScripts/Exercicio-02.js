"use strict";
let lista = [
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
const getPessoaById = (id) => lista.find((pessoa) => pessoa.id === id);
const pessoaNotFound = "Pessoa não encontrada!";
const getBioById = (id) => {
    const pessoaEncontrada = getPessoaById(id);
    return pessoaEncontrada ? pessoaEncontrada.bio : pessoaNotFound;
};
const getNameById = (id) => {
    const pessoaEncontrada = getPessoaById(id);
    return pessoaEncontrada ? pessoaEncontrada.name : pessoaNotFound;
};
const deleteById = (id) => {
    const pessoaEncontrada = getPessoaById(id);
    if (pessoaEncontrada) {
        lista = lista.filter((pessoa) => pessoa.id !== id);
        return `A pessoa ${pessoaEncontrada.name} foi deletada com sucesso!`;
    }
    else {
        return pessoaNotFound;
    }
};
const updatePersonById = (id, field, value) => {
    if (field === "id")
        return "Não é possível alterar o id de uma pessoa!";
    const pessoaEncontrada = getPessoaById(id);
    if (pessoaEncontrada) {
        pessoaEncontrada[field] = value;
        return `Dado alterado com sucesso!`;
    }
    else {
        return pessoaNotFound;
    }
};
const getBioByIdImperativo = (id) => {
    const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
    if (pessoaEncontrada) {
        return pessoaEncontrada.bio;
    }
    else {
        return "Pessoa não encontrada!";
    }
};
const getNameByIdImperativo = (id) => {
    const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
    if (pessoaEncontrada) {
        return pessoaEncontrada.name;
    }
    else {
        return "Pessoa não encontrada!";
    }
};
const deleteByIdImperativo = (id) => {
    const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
    if (pessoaEncontrada) {
        lista = lista.filter((pessoa) => pessoa.id !== id);
        return `A pessoa ${pessoaEncontrada.name} foi deletada com sucesso!`;
    }
    else {
        return pessoaNotFound;
    }
};
const updatePersonByIdImperativo = (id, field, value) => {
    if (field === "id")
        return "Não é possível alterar o id de uma pessoa!";
    const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);
    if (pessoaEncontrada) {
        pessoaEncontrada[field] = value;
        return `Dado alterado com sucesso!`;
    }
    else {
        return pessoaNotFound;
    }
};
//# sourceMappingURL=Exercicio-02.js.map