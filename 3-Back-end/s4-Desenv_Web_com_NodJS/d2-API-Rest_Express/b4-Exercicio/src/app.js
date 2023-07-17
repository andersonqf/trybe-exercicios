const express = require('express');
const { write } = require('fs');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use = express();

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
    
  } catch (error) {
    console.error(`Arquivo nao pode ser lido: ${error}`);
  }
};

const writeFile = async (moviesArr) => {
  await fs.writeFile(moviesPath, JSON.stringify(moviesArr));
};


/* EXERCICIO 05 */
app.get('/movies/:id', async(req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.find(({ id }) => id === Number(req.params.id))
    
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
      return res.status(200).json(movie)
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})

/* EXERCICIO 06 */

app.get('/movies', async(req, res) => {
  try {
    const movies = await readFile();
    return res.status(200).json(movies);

  } catch (error) {
    return res.status(500).send({message: error.message})
  }
});

/* EXERCICIO 07 */
 app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    const { movie, price } = req.body;
    const newMovie = {
      // acessamos a chave id do ultimo objeto do array de maneira dinâmica e incrementamos + 1 em seu valor
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
 });


/* EXERCICIO 08 */

  app.put('/movies/:id', async (req, res) => {
    try {
    const { id } = req.params;
      const { movie, price } = req.body;
      const movies = await readFile();
      const index = movies.findIndex((element) => element.id === Number(id));
      movies[index] = { id: Number(id), movie, price };
      const updatedMovies = JSON.stringify(movies, null, 2);
      await fs.writeFile(moviesPath, updatedMovies);
      res.status(200).json(movies[index]);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

  /* exemplo do Gepeto usando a mesma logica do exercicio acima */
  app.put('/movies/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { movie, price } = req.body;
      const movies = await readFile();
  
      const index = movies.findIndex((element) => element.id === Number(id));
      if (index === -1) {
        return res.status(404).json({ message: 'Movie not found' });
      }
  
      movies[index] = { id: Number(id), movie, price };
  
      await writeFile(movies); 
  
      return res.status(200).json(movies[index]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
  
  /* Removi a conversão para JSON usando JSON.stringify antes de escrever no arquivo, pois a função writeFile já trata essa conversão.
Adicionei uma verificação para verificar se o índice retornado por findIndex é -1, indicando que o filme não foi encontrado. Se não for encontrado, retornamos um código de status 404 e uma mensagem de erro correspondente. */


/* EXERCICIO 09 */
app.delete('/movies/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();

    const arrayPosistion = movies.findIndex((movie) => movie.id === Number(id));
    movies.splice(arrayPosistion, 1) // splice remove o elemento do array e retorna o elemento removido em um novo array (nesse caso, o elemento removido é o objeto que contém o id que foi passado como parâmetro na rota)

    await writeFile(movies); // escreve no arquivo movies.json o array movies sem o elemento que foi removido
    return res.status(200).end(); 

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
})

/* EXERCICIO 10 */
app.get('/movies/search', async (req, res) => {
 try {
  const { q } = req.query;
  const movies = await readFile();
  
if (q) {
  const filteredMovies = movies.filter((element) => element.movie.includes(q));
  return res.status(200).json(filteredMovies);
}
res.status(200).end();

} catch (err) {
  res.status(500).send({ message: err.message });
}
 });
  /* exemplo do Gepeto usando a mesma logica do exercicio acima */
  
  app.get('/movies/search', async (req, res) => {
    try {
      const movies = await readFile();
      const searchTerm = req.query.q;
      
      const filteredMovies = movies.filter((movie) => movie.title.includes(searchTerm));
  
      return res.status(200).json(filteredMovies);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
  

module.exports = app;