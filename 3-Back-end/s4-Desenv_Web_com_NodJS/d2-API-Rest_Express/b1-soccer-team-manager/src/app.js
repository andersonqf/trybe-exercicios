// src/app.js
const express = require('express'); // importando o express

const app = express(); // instanciando o express na variável app (pode ser qualquer nome) 

app.use(express.json()); // o método use() adiciona um middleware global, que será executado em todas as requisições, o express.json() converte o corpo da requisição para JSON

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

// POST cria um novo recurso com os dados enviados no corpo da requisição 
app.post('/teams', (req, res) => {
  const newTeams = { ...req.body }; // o spread operator (...) copia o objeto req.body para a variável newTeams 
  teams.push(newTeams); // adiciona o objeto newTeams ao array teams

  res.status(201).json({ newTeams }); // retorna o objeto newTeams com o status 201 (criado) 
});

app.put('/teams/:id', (req, res) => { // o método PUT atualiza um recurso específico com os dados enviados no corpo da        requisição
    const { id } = req.params; // o objeto req.params retorna um objeto com os parâmetros da requisição, neste caso o id do time que esta desestruturado 
    const { name, initials } = req.body; // o objeto req.body retorna um objeto com os dados enviados no corpo da requisição, neste caso o nome e as iniciais do time
  
    const updateTeam = teams.find((team) => team.id === Number(id)); // o método find() retorna o primeiro elemento de um array que satisfaça a condição passada como argumento, neste caso o id do time deve ser igual ao id passado na requisição 
  // console.log(updateTeam);
    if (!updateTeam) {
      return res.status(404).json({ message: 'Team not found' });
    }
  
    updateTeam.name = name; // atualiza o nome do time
    updateTeam.initials = initials; // atualiza as iniciais do time 
    res.status(200).json({ updateTeam }); // retorna o objeto updateTeam com o status 200 (ok)
  });

  /* EXERCICIO GET PESQUISA DE TIME */
  /*  Que tal treinar seus conhecimentos e listar um time pelo seu id? Crie um endpoint do tipo GET com a rota /teams/:id. */
  app.get('/teams/:id', (req, res) => {
    const team = teams.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(team);
  });

  /* DELETE */
  // o método DELETE remove um recurso específico 
  app.delete('/teams/:id', (req, res) => { // o método delete remove um recurso específico 
    const { id } = req.params; // o objeto req.params retorna um objeto com os parâmetros da requisição, neste caso o id do time
    const arrayPosition = teams.findIndex((team) => team.id === Number(id)); // o método findIndex() retorna o índice do primeiro elemento de um array que satisfaça a condição passada como argumento, neste caso o id do time deve ser igual ao id passado na requisição
    teams.splice(arrayPosition, 1); // o método splice() remove um elemento de um array, neste caso remove o elemento da posição arrayPosition e remove 1 elemento
  
    res.status(200).end();
  });

module.exports = app;