//Spred Operator

// O operador spread, representado pelo símbolo "..." (três pontos consecutivos), é um recurso do JavaScript que permite espalhar os elementos de um array ou objeto em outro array ou objeto.

// Exemplo 1: Espalhando elementos de um array em outro array

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9, 10];

console.log(newNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Exemplo 2: Espalhando elementos de um array em outro array

const numbers1 = [1, 2, 3, 4, 5];
const newNumbers1 = [0, ...numbers, 6, 7, 8, 9, 10];

console.log(newNumbers1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// Exemplo 3: Espalhando elementos de um objeto em outro objeto 

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const newPerson = {
    ...person,
    name: 'Peter',
    age: 35
};

console.log(newPerson); // {name: "Peter", age: 35, city: "New York"}
