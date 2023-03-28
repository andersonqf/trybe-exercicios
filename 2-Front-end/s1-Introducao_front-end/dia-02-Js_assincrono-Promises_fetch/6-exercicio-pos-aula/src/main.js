/* 1- criar o import das dependencias
2 - Criar as constantes da imagem botao e nome
3 - Criar uma constante com o acesso do token obtido no site
4 - criar a constante da URL do site da API
5 - criar uma funcao randomica para o uso do botao
6 - criamos o evento no botao

 */


import Swal from 'sweetalert2'

// Criamos as constantes da nossa imagem, do nome e do botão
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const btn = document.querySelector('#button');

// Aqui, você insere o token de acesso obtido no site da API

const ACCESS_TOKEN = '6042239645854088';
const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`
const MAX_HERO = 731

const randomID = () => Math.floor(Math.random() * MAX_HERO)

btn.addEventListener('click', (event) => {
    // event.preventDefault() para evitar que ele recarregue
    // a página
    event.preventDefault();
  
    const id = randomID();
  
    fetch(`${BASE_URL}/${id}`)
    // Após o fetch, devemos extrair o objeto com a função .json()
      .then((result) => result.json())
      .then((data) => {
          img.src = data.image.url; // pegamos a contante img e colocamos o src da imagem que vem da API e usamos o src para adicionar o caminho da imagem
        name.innerHTML = data.name;
      })
      // Caso haja erro, nós tratamos o mesmo com o .catch()
      .catch((error) => Swal.fire({
        // Aqui, estamos usando a nossa biblioteca, mas
        // você pode usar a função window.alert() também
        title: 'Hero not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Try again',
      }));
  });