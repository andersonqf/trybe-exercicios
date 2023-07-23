
const existingId = require('./middlewares/existingid');
const validateTeam = require('./middlewares/validateTeam');
const teams = require('./utils/teams');

// EXERCICIO 1
 
 
  //...
  
  // usa o middleware
  app.get("/teams/:id", existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    res.json(team);
  });

    // EXERCICIO 2
//...
/* const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((t) => t.id === id)) {
    // se existe, a requisição segue para o próximo middleware
    next();
  } else {
    // se não existe, então vamos retornar o status HTTP 404
    res.sendStatus(404);
  }
}; */
//...
// a ordem é significativa, embora neste caso faça pouca diferença
app.put('/teams/:id', existingId, validateTeam , (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  // não precisamos mais conferir, com certeza o team existe
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});
//...//