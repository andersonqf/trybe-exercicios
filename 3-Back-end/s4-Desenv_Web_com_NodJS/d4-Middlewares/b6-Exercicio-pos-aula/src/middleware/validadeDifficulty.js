const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const classifications = ["Fácil", "Médio", "Difícil"];

  if (!classifications.includes(difficulty)) { // o includes é um método que verifica se o valor passado como parâmetro está presente no array que o chamou e retorna true ou false de acordo com o resultado da verificação 
    return res.status(400).json({ message: "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'" });
  }

  next(); // Continua a execução caso a difficulty seja válida
};

module.exports = validateDifficulty;
