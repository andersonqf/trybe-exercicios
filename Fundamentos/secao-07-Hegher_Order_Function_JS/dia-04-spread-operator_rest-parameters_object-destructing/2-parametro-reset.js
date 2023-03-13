//Parâmetro Rest

// o paramentro reset é uma feature do ES6 que permite que voce agrupe infomacoes em um so lugar
// ele é representado por 3 pontos antes do nome do parametro 

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// No exemplo acima, a função sum utiliza a HOF reduce para calcular a soma de todos os argumentos passados a ela, independentemente do número. Como o parâmetro rest “empacota” todos os argumentos em um array, podemos utilizar o reduce para somar tudo o que estiver dentro desse array.

// o spread é responsavel por espalhar valores, e ele pode ser ultilizado para pasar parametros ao EXECUTAR uma função. Ja o rest é responsavel por agrupar valores ao DECLARAR funções que podem receber multiplos paramentros.