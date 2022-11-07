//Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
const nota = 59
//Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
if (nota >= 80 ) {
    console.log("Parabens você foi aprovado")
}
//Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
if (nota <= 80 && nota >= 60 ) {
    console.log("Você esta na nossa lista de espera")
}
//Se a nota for menor que 60, imprima “Você foi reprovada(o)”
if (nota < 60) {
    console.log("Você foi reprovado")
}