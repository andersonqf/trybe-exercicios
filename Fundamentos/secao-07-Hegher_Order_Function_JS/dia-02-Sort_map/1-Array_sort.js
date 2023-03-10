//HOFs
// Array.sort 
// A funcao sort() ordena os elementos de um array de acordo com a funcao de comparacao.

const food = ['arroz', 'feijão', 'ovo', 'batata', 'carne', 'macarrão', 'salada', 'chocolate', 'pudim', 'sorvete', 'pizza', 'lasanha', 'hamburguer', 'churrasco', 'bolo', 'pão', 'queijo', 'sushi', 'sashimi', 'peixe', 'frango'];

const foodSort = food.sort();

console.log(foodSort);

// para deixarum array de numeros em ordem crescente em basta fazer a funcao abaixo: 

const inventory = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const inventorySort = inventory.sort((a, b) => a - b); // a - b para ordem crescente
console.log(inventorySort);

// Obs : se der serusltdo negativo, o primeiro elemento vem antes do segundo, se der positivo, o primeiro elemento vem depois do segundo, se der 0, os elementos permanecem na mesma ordem.

// para deixar a ordem decrescente basta fazer a funcao abaixo:

const inventory2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const inventorySort2 = inventory2.sort((a, b) => b - a); // b - a para ordem decrescente
console.log(inventorySort2);

// vamos agora ordenar um array de objetos por uma propriedade especifica:

const people = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
];
people.sort((a, b) => a.age - b.age);
console.log(people);


