const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/people', (_req, res) => {
  res.status(200).json({ message: 'Resposta do endpoint GET /people' });
})

router.post('/people', (req, res) => { // o post serve para criar um novo recurso
    res.status(201).json({ message: `Resposta do endpoint POST /people` });
});

router.get('/people/:id', (req, res) => {
  res.status(200).json({ message: `Resposta do endpoint GET /people/:id` });
});

router.put('/people/:id', (req, res) => {
  res.status(200).json({ message: `Resposta do endpoint PUT /people/:id` });
});

router.patch('/people/:id', (req, res) => { // o patch serve para atualizar um recurso existente 
  res.status(200).json({ message: `Resposta do endpoint PATCH /people/:id` });
});

router.delete('/people/:id', (req, res) => {
  res.status(200).json({ message: `Resposta do endpoint DELETE /people/:id` });
});