// middlewares/validateRating.js
const validateRating = (req, res, next) => {
  const { rating } = req.body.description;

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json(
      { message: 'O campo rating deve ser um número inteiro entre 1 e 5' },
    );
  }

  next();
};

module.exports = validateRating;

// GEPETO

/* const express = require('express');

const validateRating = (req, res, next) => {
  const { rating } = req.body;

  if (!rating) {
    return res.status(400).json({ message: "O campo rating é obrigatório" });
  }

  // Verifica se o rating é um número inteiro
  if (!Number.isInteger(rating)) {
    return res.status(400).json({ message: "O campo rating deve ser um número inteiro" });
  }

  // Verifica se o rating está entre 1 e 5
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "O campo rating deve ser um número inteiro entre 1 e 5" });
  }

  next(); // Continua a execução caso o rating seja válido
};

module.exports = validateRating;
 */