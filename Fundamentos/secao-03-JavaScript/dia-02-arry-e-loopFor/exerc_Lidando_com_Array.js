let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

/* for (index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);   
} */

//Some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
console.log(soma);

//Calcule e imprima a média aritmética dos valores contidos no array;

/*A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; */
let media = soma / numbers.length;
console.log(media) ;

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let bigger = 0;
for (index = 0; index < numbers.length; index++) {
    if (numbers[index] > bigger) {
        bigger = numbers[index];
    }
}
console.log(bigger);

/* ************************************************************************************************************ */

let max = Math.max (...numbers)
console.log('O maior valor dentro da array é: ' + max + '!');

/* Essa solução utiliza a função Math.max() do javascript para encontrar o maior valor dentro do array. A função Math.max() recebe como parâmetro vários números e retorna o maior entre eles.

Para passarmos o array como parâmetro para a função Math.max(), utilizamos o operador "spread" (...), que permite passar cada elemento do array como um parâmetro individual para a função.

Assim, a expressão Math.max(...numbers) irá passar cada elemento do array numbers como um parâmetro para a função Math.max() e retornar o maior valor encontrado.

Por fim, utilizamos o comando console.log para imprimir o valor encontrado, concatenando com uma string para melhor entendimento. */

/* ************************************************************************************************************ */

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let odd = 0;
for (index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 != 0) {
        odd ++;
    }
}
if (odd == 0) {
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log('Foram encontrados ' + odd + ' númreos impares!');
}


//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let smaller = numbers[0];
for (index = 0; index < numbers.length; index++) {
    if (numbers[index] < smaller) {
        smaller = numbers[index];
    }
}
console.log('O menor valor é: ' + smaller);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = []
for (i = 1; i <= 25; i++) {
array.push(i)
}
console.log(array);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. 

for (i = 0; i < array.length; i++) {
    console.log(array[i] + ' dividido por 2 é igual a ' + array[i] / 2);
}

