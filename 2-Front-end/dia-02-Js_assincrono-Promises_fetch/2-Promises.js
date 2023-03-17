// Promise é um objeto que representa a conclusão ou falha de uma operação assíncrona
// sitaxe:
new Promise((resolve, reject) => {});

/* Os parâmetros *resolve* e *reject* serão usados para definirmos qual o estado que promise terá quando for finalizada.

Quando a promise for resolvida, usamos a função resolve;
Quando a promise for rejeitada, usamos a função reject. */

//exemplo de promise

new Promise((resolve, reject) => {
  if (success) {
    resolve(value);
   } else {
     reject(error);
  }
});



// // exemplo de promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 1000);
    });

promise.then((value) => {  // then() é um método que recebe uma função de callback que será executada quando a promise for resolvida
    console.log(value);
}
);
//RETORNANDO VALORES QUANDO A PROMISE É RESOLVIDA

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });


console.log(resolvedPromise());

//RETORNANDO VALORES QUANDO A PROMISE É REJEITADA

const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });