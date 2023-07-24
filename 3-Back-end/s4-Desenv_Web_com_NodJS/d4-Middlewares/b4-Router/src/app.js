const express = require('express');
const routers = require('./routers'); // Importando o módulo `routers` que contém as rotas da aplicação por padrao ele procura o index.js dentro da pasta routers


const app = express();
app.use(routers);




module.exports = app;