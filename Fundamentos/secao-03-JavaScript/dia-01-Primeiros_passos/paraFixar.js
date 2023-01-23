/* Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8. */
const base = 5;
const height = 8;
const area = base * height;
const perimeter = 2 * (base + height);
console.log(area);
console.log(perimeter);
// 40
// 26

/* Agora, vamos fazer o mesmo, mas se o tamanho do lado de um quadrado fosse 5. */
const side = 5;
const squareArea = side * side;
const squarePerimeter = 4 * side;
console.log(squareArea);
console.log(squarePerimeter);
// 25
// 20

/* Condições If e Else */
// Path: Fundamentos/secao-03-JavaScript/dia-01-Primeiros_passos/paraFixar.js
/* Vamos criar um programa que, dado um número, diz se ele é par ou ímpar. */
let number = 5;
if (number % 2 === 0) {
    console.log('O número é par!');
    }
else {
    console.log('O número é ímpar!');
    }
// O número é ímpar!

/* Agora, vamos criar um programa que diz se um número definido numa variável é divisível por 3 ou não. */
let number1 = 15;
if (number1 % 3 === 0) {
    console.log('O número é divisível por 3!');
    }
else {
    console.log('O número não é divisível por 3!');
    }

