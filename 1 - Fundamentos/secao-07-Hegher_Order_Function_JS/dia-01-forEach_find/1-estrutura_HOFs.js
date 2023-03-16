// Higher Order Function
/*  
o que é Higher Order Function?
    - Função que recebe outra função como parâmetro
    - Função que retorna uma função
*/

/* HOFs nativas do JS */

// forEach
// find
// some
// every

// forEach - executa uma ação determinada por você para cada item do array e nao possui retorno;
/* const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayNumbers.forEach((number, index) => {
    console.log(`O número ${number} está na posição ${index}`);
}); */

const arrayNumber = [4, 8, 15, 16, 23, 42];
for (let i = 0; i < arrayNumber.length; i++) {
    console.log(arrayNumber[i]);
}
// O mesmo exemplo de cima usando HOFs

arrayNumber.forEach((element) => {
    console.log(element); // equivalente a console.log(array[i])
});

// find - executa uma ação determinada por você para cada item do array e retorna o primeiro item que encontrar;

const arrayNumbers1 = [4, 8, 15, 16, 23, 42];
const findNumber = (array) => {
for (let index = 0; index < arrayNumbers1.length; index++) {
    if (array[index] > 8) {
        return array[index]
    }
}
return undefined
}

// O mesmo exemplo de cima usando HOFs

const findNumberInArray = (array) => array.find((element) => element > 8)

console.log(findNumber(arrayNumbers1));
console.log(findNumberInArray(arrayNumbers1));

// some - executa uma ação determinada por você para cada item do array e retorna true se pelo menos um item retornar true;
const arrayNumbers2 = [4, 8, 15, 16, 23, 42];
const someNumber = (array) => {
    for (let index = 0; index < arrayNumbers2.length; index++) {
        if (array[index] > 8) {
            return true;
        }
    }
    return false;
}
// O mesmo exemplo de cima usando HOFs

const someNumberInArray = (array) => array.some((element) => element > 8);

console.log(someNumber(arrayNumbers2)); //true
console.log(someNumberInArray(arrayNumbers2)); //true

// every - executa uma ação determinada por você para cada item do array e retorna true se todos os itens retornarem true;
const arrayNumbers3 = [4, 8, 15, 16, 23, 42];
const everyNumber = (array) => {
for (let index = 0; index < arrayNumbers3; index += 1) {
    if (!(array[index] > 8)) {
        return false;
    }
}
return true;
}

// O mesmo exemplo de cima usando HOFs

const everyNumberInArray = (array) => array.every ((element) => element > 8);

console.log(everyNumber(arrayNumbers3)); //false
console.log(everyNumberInArray(arrayNumbers3)); //false

