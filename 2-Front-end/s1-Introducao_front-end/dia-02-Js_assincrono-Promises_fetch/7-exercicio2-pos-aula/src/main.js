const getDogButton = document.querySelector('#random-dog');
const getCatButton = document.querySelector('#random-cat');
const getRandoButton = document.querySelector('#suprise-me');
const petImage = document.querySelector('#random-pet-image');

getDogButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {        
        petImage.src = data.message;
        });
});

getCatButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => {        
        petImage.src = data.file;
        });
});
getRandoButton.addEventListener("click", () => {
    Promise.any([ // Promise.any retorna a primeira promise que for resolvida
      fetch("https://aws.random.cat/meow"),
      fetch("https://dog.ceo/api/breeds/image/random"),
    ])
    .then(response => response.json())
    .then(data => {
        petImage.src = data.file || data.message;
        });
  });