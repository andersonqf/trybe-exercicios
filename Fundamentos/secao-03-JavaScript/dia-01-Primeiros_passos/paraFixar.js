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

/*Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. Então vamos praticar essa habilidade tão importante?  */
/* Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100; */
const nota = 80
/* Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação. */
if (nota >= 80) {
    console.log('Parabéns, você foi aprovada(o)!');
    }
else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
    }
else {
    console.log('Você foi reprovada(o)');
    }   
// Parabéns, você foi aprovada(o)!
/* Se a pessoa candidata obteve nota maior ou igual a 80% de aproveitamento, imprima na tela a mensagem: "Parabéns, você foi aprovada(o)!" */
/* Se a pessoa candidata obteve nota menor que 80% de aproveitamento e maior ou igual a 60%, imprima na tela a mensagem: "Você está na nossa lista de espera" */
/* Se a pessoa candidata obteve nota menor que 60% de aproveitamento, imprima na tela a mensagem: "Você foi reprovada(o)" */

// swit case
/* Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada'; */
const status = 'aprovada';
/* Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o caso for verdadeiro. */
switch (status) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;
    case 'reprovada':
        console.log('Você foi reprovada(o)');
        break;
    default:
        console.log('Informação incorreta');

        
