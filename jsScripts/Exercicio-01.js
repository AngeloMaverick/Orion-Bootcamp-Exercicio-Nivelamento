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
  const palavraArray = palavra.toLowerCase().split("");
  return palavraArray.filter((letra) => vogais.includes(letra)).length;
};
console.log(quantidadeVogais("pato"));
console.log(quantidadeVogais("paralelepípedo"));
console.log(quantidadeVogais("abacate"));
console.log(quantidadeVogais("palhação"));
console.log(quantidadeVogais("chacoalhão"));
console.log(quantidadeVogais("àquela"));
//# sourceMappingURL=Exercicio-01.js.map

const inputPalavra = document.getElementById("inputPalavra");
const resultado = document.getElementById("resultado");

inputPalavra.addEventListener("input", () => {
  resultado.textContent = quantidadeVogais(inputPalavra.value);
});
