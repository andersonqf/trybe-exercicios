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
let let2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.unshift(0);
console.log(arr);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//.pop remove o ultimo elemento do array
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.pop();
console.log(arr);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

//.shift remove o primeiro elemento do array
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.shift();
console.log(arr);
// [2, 3, 4, 5, 6, 7, 8, 9, 10]

//.indexOf verifica a posição do elemento no array
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.indexOf(5));
// 4

