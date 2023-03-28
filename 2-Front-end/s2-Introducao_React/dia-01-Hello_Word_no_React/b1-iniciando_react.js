/* Iniciaremos usando o gerenciador de pacote NPM. Ele é reponsavel por instalar e gerenciar as versoes dos pacotes que utilizaremos nas nossas aplicacoes. */

// Para iniciar um projeto React, usaremos o comando abaixo
// npm init react-app nome-da-aplicacao

// O comando acima ira criar uma pasta com o nome da aplicacao e instalar todas as dependencias necessarias para o projeto.

// Podemos tambem usar o NPX para executar pacotes sem a necessidade de instalacao.
// Comando abaixo inicia o projeto React
// npx create-react-app nome-da-aplicacao

// Apos iniciar o projeto, podemos acessar a pasta do projeto e executar o comando abaixo para iniciar o servidor de desenvolvimento
// npm start

// exemplo de codigo JSX
/* Para fixar, crie um elemento JSX que recebe o valor “Hello, JSX” de uma constante chamada textJSX, e o incorpore em uma tag h1 */

import React from 'react'; // importa o React

export default function App() { // exporta a funcao App 
    const textoTeste = 'Hello, JSX' // cria uma constante com o texto a ser exibido
    const ElementH1 = <h1> { textoTeste } </h1>; // cria um elemento JSX com o texto a ser exibido

    return( // retorna o elemento JSX para ser exibido
        <div className='App'> {ElementH1} </div> // cria um elemento div com classe 'App' e adiciona o elemento JSX dentro dele
    ) // fim do return
} // fim da funcao App

