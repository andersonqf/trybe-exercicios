import { nanoid } from 'nanoid'; // importar a função nanoid do pacote nanoid instalado no projeto (npm install nanoid) 
import copy from 'clipboard-copy';

import './style.css';
/* const randomPassword = nanoid(20); // gerar uma senha aleatória de 20 caracteres
console.log(randomPassword);
//console.log('Hello World!'); */

const passwordElement = document.querySelector('button');
/* console.log(passwordElement); */
const displayElement = document.querySelector('h2');

passwordElement.addEventListener('click' ,() => {
    /* console.log(nanoid()); */
    displayElement.innerHTML = nanoid();
});

displayElement.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');

});

