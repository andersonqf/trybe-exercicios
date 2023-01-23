/* Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if. */
const a = 1;
const b = 4;
const c = 3;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log(true);
}
else { 
    console.log(false);
}

/* Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if. */

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log(true);
}
else {
    console.log(false);
}