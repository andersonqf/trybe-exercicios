const express = require('express');
const { readMissionsData, writeMissionsData, updateMissionData,
     deleteMissionData } = require('./utils/fsUtils');

const app = express();

app.use(express.json()); // para o post funcionar; sem isso, o post não funciona 

const validateMissionId = (req, res, next) => { // MIDDLEWARE
  const { id } = req.params;

  const idIsNumber = Number(id);
  if (Number.isNaN(idIsNumber)) { 
  res.status(400).json({ message: 'id must be a number' });
} else {
  next();
}
};

const validateMissionData = (req, res, next) => { // MIDDLEWARE
  const requiredProperties = ['name', 'year', 'country', 'destination'];

  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    res.status(400).json({ message: 
      'A missão precisa receber os atributos de name, year, country e destination' });
  }
};

app.get('/missions', async (_req, res) => {
  const missions = await readMissionsData();
  
  return res.status(200).json({ missions });
  });

app.post('/missions', validateMissionData, async (req, res) => {
  const newMission = req.body;

  const newMissionsWithId = await writeMissionsData(newMission);
  return res.status(201).json({ newMissionsWithId });
  });

app.put('/missions/:id', validateMissionId, validateMissionData, async (req, res) => {
  const { id } = req.params;
  const updatedMissionData = req.body;

  const updatedMission = await updateMissionData(Number(id), updatedMissionData);
  return res.status(201).json({ mission: updatedMission });
});

app.delete('/missions/:id', validateMissionId, async (req, res) => {
  const { id } = req.params;

  await deleteMissionData(Number(id));
  return res.status(204).end();
});

module.exports = app;