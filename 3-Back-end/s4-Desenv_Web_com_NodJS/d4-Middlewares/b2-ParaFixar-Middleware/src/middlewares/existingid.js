const teams = require("../utils/teams");

const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((t) => t.id === id)) {
    // se existe, a requisição segue para o próximo middleware
    next();
  }else {
    res.sendStatus(404);
  }
}

// Atualizando o codigo acima para facilitar o entendimento do erro caso aconteça

const existingId1 = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (!team) return res.status(404).json({ message: 'Time não encontrado' });
  next();
};

module.exports = existingId