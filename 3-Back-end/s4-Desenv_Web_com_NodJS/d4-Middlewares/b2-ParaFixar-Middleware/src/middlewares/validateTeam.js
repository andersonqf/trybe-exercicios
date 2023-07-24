// src/middlewares/validateTeam.js

const validateTeam = (req, res, next) => { // Middleware que valida o time recebido no body da requisição e o coloca no req.body para ser usado no controller de criação de times (createTeam) 
  const requiredProperties = ['nome', 'sigla']; 
  if (requiredProperties.every((property) => property in req.body)) { // Se todas as propriedades obrigatórias estiverem presentes no body da requisição 
    next(); // Chama o próximo middleware
  } else {
    res.sendStatus(400); // Ou já responde avisando que deu errado
  }
};

// Atualizando o codigo acima para facilitar o entendimento do erro caso aconteça

const validateTeam1 = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório'});
  if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório'});
  next();
};

module.exports = validateTeam;