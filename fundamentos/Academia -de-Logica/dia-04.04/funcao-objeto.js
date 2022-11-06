// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato abaixo:


let objeto = {
    area: 0,
    perimetro: 0,
  };
  
  // Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura
  // Exercício 2 - Crie uma função que, dado um array de números inteiros,
  // retorne a quantidade de números pares e ímpares no formato abaixo:
  
  let numeros = {
    pares: 0,
    ímpares: 0,
  };
  // Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
  // Considere que a string ending sempre será menor que a string word.
  // Dica: Use o split.
  
  // valor de teste: 'trybe' e 'be'
  // valor esperado no retorno da função: true
  // verificaFimPalavra('trybe', 'be');
  // Retorno esperado: true
  // verificaFimPalavra('joaofernando', 'fernan');
  // Retorno esperado: false;










//   GABARITO

//   //1
// function quadrilatero(base, altura) {
//     let resultado = {
//       perimetro: (2 * base) + (2 * altura),
//       area: (base * altura)
//     };
//     return resultado;
//   };
  
     //2
//   function imparesEPares(numeros) {
//     let resultado = {
//       par: 0,
//       impar: 0,
//     };
  
//     for (index = 0; index < numeros.length; index += 1) {
//       if (numeros[i] % 2 == 0) {
//         resultado.par += 1;
//       } else {
//         resultado.impar += 1;
//       };
//     };
//     return resultado;
//   };
  
//   // 2 com forof
//   function imparesEPares(numeros) {
//     let resultado = {
//       par: 0,
//       impar: 0,
//     };
  
//     for (const numero of numeros) {
//       if(numero % 2 === 0) {
//         resultado.par += 1;
//       } else {
//         resultado.impar += 1;
//       };
//     }
//     return resultado;
//   };
  
//   //3
//   function verificaString(palavra, ending) {
//     if (palavra.endsWith(ending)) {
//       return true
//     }
//     return false;
//   }
  
//   //3 com split 
//   function verificaFimPalavra(word, ending) {
//     let resultado = word.split(ending);
//     if (resultado[resultado.length - 1] === '') {
//       return true;
//     }
//     return false;
//   }