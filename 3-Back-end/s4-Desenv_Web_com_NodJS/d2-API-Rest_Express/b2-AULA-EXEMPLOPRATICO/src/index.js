/* AULA 4.1 NODE.JS RUNTIME ASSINCRONO / LEITURA E ESCRITA DE ARQUIVOS  */
const readline = require('readline-sync');
const { writeMissionsData } = require('./utils/fsUtils');

// a funcao abaixo é apenas um exemplo de como usar a funcao readMissionsData para adicionar usando perguntas para o usuario

function main() {
   const name = readline.question('Qual o nome da missão? ');
   const year = readline.questionInt('Qual o ano da missão? ');
   const country = readline.question('Qual o país da missão? ');
   const destination = readline.question('Qual o destino da missão? ');

   const newMission = { name, year, country, destination };
   writeMissionsData(newMission);
   console.log('Missão adicionada com sucesso!');
} 

/* // a funcao abaixo é apenas um exemplo de como usar a funcao writeMissionsData para adicionar um novo objeto no arquivo missions.json
async function main() {
   writeMissionsData({
         "id": 1,
        "name": "Missão Apollo 11",
        "year": 1969,
        "country": "Estados Unidos",
        "destination": "Lua"
    }); 
}; */
main();