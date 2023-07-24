const valuesValidation = (req, res, next) => {
  const blogPost = req.body;

  const isValid = Object.values(blogPost).every((value) => value.length >= 5);
  if (!isValid) {
    return next({ statusCode: 422, message: 'Dados inválidos' }); // Middleware de erro da funcao errorHandle 
   // return res.status(422).json({ message: 'Dados inválidos' });
  }
  next();
};

module.exports = valuesValidation;