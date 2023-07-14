const readline = require('readline-sync') // modulo nativo do node para trabalhar com entrada de dados do usuario 
const name = readline.question('Qual seu nome? '); // question é um metodo do modulo readline que recebe uma string como parametro e retorna o que o usuario digitar no terminal
const age = readline.questionInt('Qual sua idade? '); // questionInt é um metodo do modulo readline que recebe uma string como parametro e retorna o que o usuario digitar no terminal convertido para inteiro

console.log(`Hello ${name}! You are ${age} years old!`);
// console.log('Hello, world!')