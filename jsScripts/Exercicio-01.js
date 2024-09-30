"use strict";
const quantidadeVogais = (palavra) => {
    const vogais = [
        "a",
        "e",
        "i",
        "o",
        "u",
        "á",
        "à",
        "ã",
        "â",
        "é",
        "ê",
        "í",
        "ó",
        "ô",
        "ú",
    ];
    const palavraArray = palavra.split("");
    return palavraArray.filter((letra) => vogais.includes(letra)).length;
};
console.log(quantidadeVogais("pato"));
console.log(quantidadeVogais("paralelepípedo"));
console.log(quantidadeVogais("abacate"));
console.log(quantidadeVogais("palhação"));
console.log(quantidadeVogais("chacoalhão"));
console.log(quantidadeVogais("àquela"));
//# sourceMappingURL=Exercicio-01.js.map