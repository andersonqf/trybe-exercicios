// swit case
/* Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada'; */
const status = 'aprovada';
/* Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o caso for verdadeiro. */
switch (status) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;
    case 'reprovada':
        console.log('Você foi reprovada(o)');
        break;
    default:
        console.log('Informação incorreta');
}