// Array_reduce
//
// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

// Sintaxe
// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// primeiro passa por cada item
// depois conferir se o item é menor que 8
// depois somar os itens

let acumulador = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 8) {
    acumulador = acumulador + numbers[i];
  }
}
console.log(acumulador);

// Com o reduce
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers1.reduce((acumulador, valorAtual) => {
    if (valorAtual < 8) {
        return acumulador + valorAtual;
    }
    return acumulador;
    }, 0);
console.log(result);