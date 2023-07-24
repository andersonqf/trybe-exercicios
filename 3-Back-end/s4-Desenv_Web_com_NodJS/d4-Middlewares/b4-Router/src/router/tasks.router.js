const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/tasks', (_req, res) => {
  res.status(200).json({ message: 'Resposta do endpoint GET /tasks' });
});

router.post('/tasks', (req, res) => {
  res.status(201).json({ message: 'Resposta do endpoint POST /tasks' });
});

router.get('/tasks/:id', (req, res) => {
  res.status(200).json({ message: 'Resposta do endpoint GET /tasks/:id' });
});

router.put('/tasks/:id', (req, res) => {
  res.status(200).json({ message: 'Resposta do endpoint PUT /tasks/:id' });
});

router.patch('/tasks/:id', (req, res) => {
  res.status(200).json({ message: 'Resposta do endpoint PATCH /tasks/:id' });
});

router.delete('/tasks/:id', (req, res) => {
  res.status(200).json({ message: 'Resposta do endpoint DELETE /tasks/:id' });
});


