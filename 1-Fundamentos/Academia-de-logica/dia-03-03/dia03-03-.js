/* 1. Encontre o index através do valor de um elemento
Primeiramente divida seu problema em partes e só depois disso comece a codar.

Escreva um algoritmo que recebe 2 parâmetros:

Um array contendo um conjunto de números
O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:

"Elemento não encontrado no array"

2. Retorne os números ímpares
Primeiramente divida seu problema em partes e só depois disso comece a codar.

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:

"x, y, z, ...n" */

let array = []
for (i = 1; i<=50; i++) {
    array.push(i);
}
/* console.log(array) */;

let odd = [];

for (i=0; i<array.length; i++) {
    if (array[i] % 2 !== 0) {
        odd.push(array[i]);
    }
}
console.log(odd);

/* ****************OU********************************** */

let odd1 = [];
for (i=0; i<50; i++) {
    if (i % 2 !== 0) {
        odd1.push(i)
    }
}
console.log(odd1);

/* 3. Números divisíveis por 3
Primeiramente divida seu problema em partes e só depois disso comece a codar.

Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais:

"Há 50 ou mais números divisíveis por 3"

Caso o contrário: "Sequência muito pequena." */