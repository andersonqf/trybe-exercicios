//HOFs
//Array.find

// A funcao find() retorna o valor do primeiro elemento do array que satisfaz a funcao de teste provida. Caso contrario, undefined sera retornado.

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];
idades.find((idade) => idade < 20);
idades.find((idade) => idade > 50);
/* console.log(idades.find((idade) => idade < 20)); // 18
console.log(idades.find((idade) => idade > 50)); // 73 */


// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const divisao = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(divisao);

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNamesWhithFiveLetter = names.find ((name) => name.length === 5 );
console.log(findNamesWhithFiveLetter); // Irene

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
const findMusica = musicas.find((musica) => musica.id === '31031685');
console.log(findMusica); // id: '31031685', title: 'Partita in C moll BWV 997'