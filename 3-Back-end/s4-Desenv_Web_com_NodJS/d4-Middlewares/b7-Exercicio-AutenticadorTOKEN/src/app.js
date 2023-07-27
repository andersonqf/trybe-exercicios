const express = require('express');
const generateToken = require('../utils/generateToken');

const app = express();

app.use(express.json());

app.post('/signup', (_req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) { // se algum dos campos estiver ausente, retorna um erro 401
    return res.status(401).json({ message: 'Campos ausentes!' });

    /* if (!email || !password || !firstName || !phone) {
  return res.status(401).json({ message: 'Campos ausentes!' });
}
 */

    /* const requiredFields = ['email', 'password', 'firstName', 'phone'];
for (const field of requiredFields) {
  if (!req.body[field]) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
}
 */
  }

  const token = generateToken(); // gera um token aleatório
  return res.status(200).json({ token });
});