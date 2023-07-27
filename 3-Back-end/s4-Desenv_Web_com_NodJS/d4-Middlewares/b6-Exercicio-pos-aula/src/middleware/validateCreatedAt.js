// middlewares/validateCreatedAt.js
 const validateCreatedAt= (req, res, next) => {
  const { createdAt } = req.body.description;

  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i; // https://stackoverflow.com/questions/15491894/regex-to-validate-date-format-dd-mm-yyyy

  if (!isFormatDate.test(createdAt)) { // o isFormatDate. é um método que testa se a data está no formato dd/mm/aaaa usando uma expressão regular (regex), ja o test é um método que testa se a data é válida usando o construtor de Date do JavaScript
    return res.status(400).json(
      { message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' },
    );
  }

  next();
};

module.exports = validateCreatedAt;

// GEPETO
/* 
const validateDate = (req, res, next) => {
  const { createdAt } = req.body.descprition;

  // Verifica se a chave createdAt está presente no corpo da requisição
  if (!createdAt) {
    return res.status(400).json({ message: "O campo createdAt é obrigatório" });
  }
  
  // Verifica se a data está no formato dd/mm/aaaa usando uma expressão regular
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; 
  if (!dateRegex.test(createdAt)) {
    return res.status(400).json({ message: "O campo createdAt deve ter o formato 'dd/mm/aaaa'" });
  }
  
  // Verifica se a data é válida usando o construtor de Date do JavaScript
  const [day, month, year] = createdAt.split('/').map(Number);
  const isValidDate = !isNaN(new Date(year, month - 1, day));
  
  if (!isValidDate) {
    return res.status(400).json({ message: "O campo createdAt deve ter uma data válida" });
  }
  
  next(); // Continua a execução caso a data seja válida
  module.exports = validateDate;
};
*/