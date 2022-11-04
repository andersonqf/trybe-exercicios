function alteraTextParagrafo() {
    const paragrafo = document.getElementsByTagName('p');
    paragrafo[1].innerText = 'Mentoria 13h' // adicionando um texto no paragrafo selecionado
    console.log(paragrafo[1]);
}
alteraTextParagrafo()

// exercicio 2

function alterandoCorDoQuadradoAmarelo() {
    const quadradoAmarelo = document.getElementsByClassName('main-content'); // usar o inspecionar no site html e verificar onde esta classe ou id do parametro que esta dentro do getElements...
    quadradoAmarelo[0].getElementsByClassName.backgroungColor = 'rgb(76,164,109)'
}