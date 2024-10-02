// Criar uma função que retorne a quantidade de vogais da palavra passada.

const quantidadeVogais = (palavra: string): number => {
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
  const palavraArray: string[] = palavra.toLowerCase().split("");
  return palavraArray.filter((letra) => vogais.includes(letra)).length;
};

console.log(quantidadeVogais("pato")); //2
console.log(quantidadeVogais("paralelepípedo")); //7
console.log(quantidadeVogais("abacate")); //4
console.log(quantidadeVogais("palhação")); //4
console.log(quantidadeVogais("chacoalhão")); //5
console.log(quantidadeVogais("àquela")); //4
