const express = require('express'); 
const blogPostRoute = require('./routes/blogPostRoutes');
const errorHandle = require('./middleware/error');

const app = express();

app.use(express.json());
app.use(blogPostRoute);

app.use(errorHandle);

module.exports = app;