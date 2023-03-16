//HOFs
// Array.some e Array.every

// array.some - retorna true se pelo menos um item do array satisfazer a condição
// array.every - retorna true se todos os itens do array satisfazerem a condição

/* Imagine que você esteja responsável por criar um sistema de acesso para as pessoas colaboradas da empresa em que você trabalha. Para isso, precisa verificar se pelo menos uma dessas pessoas possui o cargo de gerência. Como você faria? */

const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];

const gerente = pessoas.some((pessoa) => pessoa.cargo === 'Gerência')
console.log(gerente); // true

// Agora, utilizando a mesma lógica, verifique se existe uma pessoa com o cargo de 'Product Owner'. Analise e execute o código abaixo:

const pessoas1 = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];
  
  const verificaCargo = pessoas1.some((pessoa) => pessoa.cargo === 'Product Owner');
  
  console.log(verificaCargo); // false

// Agora imagine que você precise verificar se existe algum nome que comece com a letra desejada. Analise e execute o código abaixo:

  const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false
console.log(verifyFirstLetter('a', listNames));

// Imagine que você pegou um boletim escolar antigo e quer verificar se passou em todas as matérias. Como você faria? 🤔

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); 
  
  console.log(verifyGrades); // false