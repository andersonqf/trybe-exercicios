/*Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e verifique quem é a pessoa mais jovem.

Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:

"x é a pessoa mais jovem e possui y anos de idade"

Exemplo de como posso dividir meu problema em etapas:

#1 - Descobrir a idade de cada pessoa.

#2 - Criar uma variável para armazedar a idade de cada pessoa

#3 - Verificar quem é a pessoa mais velha, ou seja quem tem a idade com maior valor.
 - Se a Marina for mais velha - aparecer a frase com o nome dela
 - Se a Silvia for mais velha - aparecer a frase com o nome dela
 - Se a Iza for mais velha - aparecer a frase com o nome dela

Aqui apenas uma idéia do que pode ser feito e ah, agora que leu tudo aqui vai a idade de cada uma das pessoas.

Marina tem 27 anos, Silvia 18 e Iza 63.

ps: você pode alterar essas idades para testar seu código! */

/*let Marina = '35'
let Silvia = '20'
let Iza = '10'

if (Marina > Silvia && Marina > Iza) {
    console.log('Marina é a pessoa mais velha e possui ' + Marina +  ' anos de idade')
    }
    else if (Silvia > Marina && Silvia > Iza) {
        console.log('Silvia é a pessoa mais velha e possui 18 anos de idade')
    }
    else if (Iza > Marina && Iza > Silvia) {
        console.log('Iza é a pessoa mais velha e possui 63 anos de idade')
    }
    else {
        console.log('As pessoas tem a mesma idade')
    } */

// ****************************************************

/* 2. Taxa Metabólica Basal
Primeiramente divida seu problema em partes e só depois disso comece a codar.

Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de TMB (Taxa Metabólica Basal) em seu site, vamos ajudá-la escrevendo um algoritmo.

Ele recebe os seguintes dados:

age: número maior que 0
sex: M ou F
weight: Em (kg) com número maior que 0
height: Em (cm) com número maior que 0
A fórmula para homens:

(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
A fórmula para mulheres:

(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
Imprima no terminal o resultado do cálculo no formato:

"A taxa metabólica basal é: x Kcal" */

let age = 20;
let sex = '';
let weight = 60;
let height = 170;



/* 3. Lanchonete da Trybe
Primeiramente divida seu problema em partes e só depois disso comece a codar.

A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.

Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo e imprima no terminal a mensagem de acordo com a opção escolhida.

Ou seja, se o número for 2 o código deve imprimir no terminal "2 - McTrybe".

Tabela:

"1 - Trybe Lanche Feliz"

"2 - McTrybe"

"3 - TrybeWooper"

"4 - X-Trybe"

"5 - Triplo Trybe com JS"

Caso a pessoa escolha uma opção inexistente, imprima no terminal:

"Ainda não possuímos esta opção :(" */
