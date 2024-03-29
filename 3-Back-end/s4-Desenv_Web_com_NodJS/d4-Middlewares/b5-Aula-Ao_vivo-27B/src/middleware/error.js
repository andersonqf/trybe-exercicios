const errorHandle = (err, _req, res, _next) => {
  const { statusCode, message } = err;
  return res.status(statusCode).json({ message });
};

module.exports = errorHandle;