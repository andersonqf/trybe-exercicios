const readline = require('readline-sync');

/* const weightInKg = 72; // Você pode utilizar o valor que desejar aqui
const heightInCm = 167; // Você pode utilizar o valor que desejar aqui */

function handleBMI(weight, height) {
    
    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;
    
    const bmi = weight / heightSquared;
    console.log(`Weight: ${weight}, Height: ${height}`);
    
    return bmi;
}

// A função main é o ponto de partida do nosso programa
function main() {
    const weightInKg = readline.questionFloat('Qual o seu peso em Kg? ');
    const heightInCm = readline.questionInt('Qual a sua altura em cm? ');
    
    const bmi = handleBMI(weightInKg, heightInCm);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();

