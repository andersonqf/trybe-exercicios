// src/app.js
const express = require('express'); // importando o express

const app = express(); // instanciando o express na variável app (pode ser qualquer nome) 

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];
// get solicita daos de um recurso específico
app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' })); // criando uma rota raiz com o método GET que retorna um JSON com a mensagem "Olá Mundo!" e o status 200, os paramentros req e res representam a requisição e a resposta respectivamente 

app.get('/teams', (req, res) => res.status(200).json({ teams })); // criando uma rota /teams com o método GET que retorna um JSON com o array teams e o status 200 

//POST cria um novo recurso com os dados enviados no corpo da requisição 
app.post('/teams', (req, res) => {
    const newTeams = {... req.body}; // o spread operator (...) copia o objeto req.body para a variável newTeams 
    teams.push(newTeams); // adiciona o objeto newTeams ao array teams

    res.status(201).json({ newTeams }); // retorna o objeto newTeams com o status 201 (criado) 
});

module.exports = app;