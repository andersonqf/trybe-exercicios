// HOFs 
// Array.forEach

// Acessar o array de pessoasAprovadas.forEach

const pessoasAprovadas = ['João', 'Maria', 'Antônio', 'Margarida', 'Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins'];
pessoasAprovadas.forEach((nome, index) => {
    pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessando o array de pessoasAprovadas e atualiza para letra maiúscula.
});

console.log(pessoasAprovadas);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((element) => {
    console.log(element * 2); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
});

// podemos escrever esse código de forma mais simples:

numbers.forEach((element) => console.log(element * 2));

// Imagine que você esteja responsável por exibir a lista de emails de todas as pessoas que trabalham na mesma empresa que você. Para isso, você pode utilizar o forEach para apresentar os emails.

// Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
emailListInData.forEach((email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
});