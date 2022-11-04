// const a = 10;
// const b = 5;

// console.log( total: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// const n1 = 60
// const n2 = 50
// const n3 = 40

// if ( n1 > n2 ) {
//     console.log(n1);
// }
// else {
//     console.log (n2);
// }

// if (n1 > n2 && n1 > n3) {
//     console.log (n1);
// }
// else if (n2 > n1 && n2 > n3) {
//     console.log (n2);
// }
// else {
//     console.log (n3);
// }

// const number = -1;

// if ( number > 0)
//     console.log("positive");
// else if (number < 0)
//     console.log ("negative");
// else
//     console.log ("o numero é igual a zero");

// const angulo1 = -40;
// const angulo2 = -50;
// const angulo3 = -90;
// let total = (angulo1 + angulo2 + angulo3);
// let positive ()
// if (total === 180) {
//     console.log(true)
// }
// else if ( total > 180 || (total < 180 && total > 0)  ) {
//     console.log(false)
// }
// else if ( total <= 0) {
//     console.log ("Angulos invalidos")
//}

const angleA = 65;
const angleB = 100;
const angleC = 15;

let somaAngle = angleA + angleB + angleC;

let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;

if(allAnglesArePositives){
  if (somaAngle === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}