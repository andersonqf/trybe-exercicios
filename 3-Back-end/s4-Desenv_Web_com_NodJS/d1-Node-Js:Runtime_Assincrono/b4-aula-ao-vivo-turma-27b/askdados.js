const readline = require ('readline-sync')

const askdados = () => readline.question ('Qual o seu nome? ');
    /* const age = readline.question('Qual a sua idade? '); */


module.exports = { askdados };