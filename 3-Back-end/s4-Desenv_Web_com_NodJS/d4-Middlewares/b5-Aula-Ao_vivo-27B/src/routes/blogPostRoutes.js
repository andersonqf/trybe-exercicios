const express = require('express');
const utilsFile = require('../utils/readAndWriteFiles');
const filedValidation = require('../middleware/fieldValidation');
const valuesValidation = require('../middleware/valuesValidation');

const route = express.Router();

route.get('/blogPosts', async (req, res) => {
  const posts = await utilsFile.readBlogPostFile();
  res.status(200).json(posts);
});

const validacoes = [filedValidation, valuesValidation];

route.post('/blogPosts', validacoes, async (req, res) => {
  const blogPost = req.body;
  
  const id = await utilsFile.getBlogPostLastId() + 1;

  const blogPostWinthDate = {
    id,
    ...blogPost,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await utilsFile.insertBlogPostFile(blogPostWinthDate);
  
  res.status(201).json(blogPostWinthDate);
});

module.exports = route;