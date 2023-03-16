/*Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. Então vamos praticar essa habilidade tão importante?  */
/* Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100; */
const nota = 80
/* Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação. */
if (nota >= 80) {
    console.log('Parabéns, você foi aprovada(o)!');
    }
else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
    }
else {
    console.log('Você foi reprovada(o)');
    }   
// Parabéns, você foi aprovada(o)!
/* Se a pessoa candidata obteve nota maior ou igual a 80% de aproveitamento, imprima na tela a mensagem: "Parabéns, você foi aprovada(o)!" */
/* Se a pessoa candidata obteve nota menor que 80% de aproveitamento e maior ou igual a 60%, imprima na tela a mensagem: "Você está na nossa lista de espera" */
/* Se a pessoa candidata obteve nota menor que 60% de aproveitamento, imprima na tela a mensagem: "Você foi reprovada(o)" */

