 // Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeText() {
  const tagP = document.getElementsByTagName('p');
  tagP[1].innerText = 'mudar de nome para xablau';
}
changeText ();

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeColor() {
  const mainContent = document.getElementsByClassName('main-content')[0];
  mainContent.style.backgroundColor = 'rgb(16, 164, 109)'

}
changeColor()
  
// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function changeColorRedWhite() {
  const centerContent = document.getElementsByClassName('center-content')[0];
centerContent.style.backgroundColor = 'white'
}
changeColorRedWhite()

// 4. Crie e execute uma função que corrija o texto da tag <h1>.
function titleJavaScript () {
  const titleJs = document.getElementsByClassName('title')[0];
  titleJs.innerText = 'Exercício - JavaScript'

}
titleJavaScript ()

// 5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase()

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs();      

