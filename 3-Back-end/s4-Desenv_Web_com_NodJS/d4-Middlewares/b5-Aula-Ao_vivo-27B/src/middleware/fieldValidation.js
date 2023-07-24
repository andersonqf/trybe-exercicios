const filedValidation = (req, res, next) => {
  const blogPost = req.body;
  
  const requiredProperties = ['title', 'description', 'author'];
  const hasProperties = requiredProperties.every((property) => property in blogPost);
  if (!hasProperties) {
    return next({ statusCode: 400, message: 'Faltando algm atributo' }); // Middleware de erro da funcao errorHandle
    // return res.status(400).json({ message: 'Faltando algum atributo' });
  }
  next();
};

module.exports = filedValidation;