//comandos para os metodos .lengt ; .push ; .unshift; .pop ; .shift; indexOf
//.splice ; .slice ; .join ; .split ; .reverse ; .sort

//.length verifica a quantidade de elementos contido no array 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.length);
//10 quantidades

//.push adiciona um elemento no final do array
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   
arr.push(11);   
console.log(arr);   
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//.unshift adiciona um elemento no inicio do array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.unshift(0);
console.log(arr2);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//.pop remove o ultimo elemento do array
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3.pop();
console.log(arr3);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

//.shift remove o primeiro elemento do array
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr4.shift();
console.log(arr4);
// [2, 3, 4, 5, 6, 7, 8, 9, 10]

//.indexOf verifica a posição do elemento no array
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr5.indexOf(5));
// 4

//.splice remove um elemento do array
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr6.splice(5, 1);
console.log(arr6);
// [1, 2, 3, 4, 5, 7, 8, 9, 10]

//.slice retorna um novo array a partir de um indice
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr7.slice(5));
// [6, 7, 8, 9, 10]

//.join junta todos os elementos de um array em uma string
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr8.join('-'));
// 1-2-3-4-5-6-7-8-9-10

//.split transforma uma string em um array
let arr9 = '1-2-3-4-5-6-7-8-9-10';
console.log(arr9.split('-'));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//.reverse inverte a ordem dos elementos do array
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr10.reverse());
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//.sort ordena os elementos do array
let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr11.sort());
// [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]