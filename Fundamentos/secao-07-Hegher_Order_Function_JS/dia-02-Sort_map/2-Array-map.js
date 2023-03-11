//HOFs
//Array.map

// o metodo map() invoca a funcao callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

// sintaxe:
// const newArray = arr.map(callback(elemento[, index[, array]])[, thisArg])

// exemplo 1:
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt); // Math.sqrt() retorna a raiz quadrada de um numero
console.log(roots); // [1, 2, 3] 

// exemplo 2:
const numbers1 = [1, 4, 9]; 
const doubles = numbers1.map(x => x * 2); // x => x * 2 é uma funcao anonima que retorna o dobro de x
console.log(doubles); // [2, 8, 18]

// exemplo 3:
const pessoas = ['joice', 'jose', 'maria', 'lucas', 'vitor', 'gilberto'];
const novasPessoas = pessoas.map((element) => element.toUpperCase());
console.log(novasPessoas); // [ 'JOICE', 'JOSE', 'MARIA', 'LUCAS', 'VITOR', 'GILBERTO' ]

// exemplo 4:
const pessoas1 = ['joice', 'jose', 'maria', 'lucas', 'vitor', 'gilberto'];

const novasPessoas1 = pessoas1.map((element) => {
const registro = {};
 registro.nome = element;
 registro.sobrenome = 'silva';
 registro.idade = 20;
 return registro;
})

console.log(novasPessoas1); // [ { nome: 'joice', sobrenome: 'silva', idade: 20 }, { nome: 'jose', sobrenome: 'silva', idade: 20 }, { nome: 'maria', sobrenome: 'silva', idade: 20 }, { nome: 'lucas', sobrenome: 'silva', idade: 20 }, { nome: 'vitor', sobrenome: 'silva', idade: 20 }, { nome: 'gilberto', sobrenome: 'silva', idade: 20 } ]


//Suponha que seja preciso transformar todos os números em negativo e passá-los para um array novo. Para isso, podemos usar o método map().
// exemplo 5:

const numeros = [1, 2, 3, 4, 5, -6];
const numerosNegativos = numeros.map((numero) => ((numero > 0) ? numero * (-1) : numero));
console.log(numerosNegativos);

// exemplo 6: una os dois arrays abaixo em um so, onde cada elemento sera um objeto com a propriedade produto e preço, utilizando o map

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProduts = products.map((element, index) => {
    const registro = {};
    registro.produto = element; 
    registro.preco = prices[index];
    return registro;
})

console.log(listProduts);

//outra forma de fazer o exemplo 6:

const products1 = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices1 = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((products, index) => ({[products]:listPrices[index]}));

console.log(updateProducts(products1, prices1));

