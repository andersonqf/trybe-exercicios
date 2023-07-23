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

module.exports = existingId