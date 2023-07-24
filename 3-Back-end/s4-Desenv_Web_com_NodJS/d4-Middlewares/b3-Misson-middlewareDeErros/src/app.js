const express = require('express');
const { readMissionsData, writeMissionsData, updateMissionData,
     deleteMissionData } = require('./utils/fsUtils'); 

require('express-async-errors');

const app = express(); // Criando uma instância do Express

app.use(express.json()); // para o post funcionar; sem isso, o post não funciona 

app.get('/missions', async (_req, res) => {
  const missions = await readMissionsData();

  return res.status(200).json({ missions });
  });

app.post('/missions', async (req, res) => {
  const newMission = req.body;

  const newMissionsWithId = await writeMissionsData(newMission);
  return res.status(201).json({ newMissionsWithId });
  });

app.put('/missions/:id', async (req, res) => {
  const { id } = req.params;
  const updatedMissionData = req.body;

  const updatedMission = await updateMissionData(Number(id), updatedMissionData);
  return res.status(201).json({ mission: updatedMission });
});

app.delete('/missions/:id', async (req, res) => {
  const { id } = req.params;

  await deleteMissionData(Number(id));
  return res.status(204).end();
});

app.use((err, _req, res, _next) => { // Middleware de erro genérico que recebe o erro como parâmetro e retorna um status 500 com uma mensagem de erro
  console.error(err.stack);
  _next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).send({ message: 'Algo deu errado!' });
});

module.exports = app;