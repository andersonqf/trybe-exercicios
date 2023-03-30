// Conenhecendo os componentes react native e suas propriedades 

/*  existem duas maneeiras de definirmos um componente 
    * 1 - definindo uma função que retorna um componente (Componente função)
    * 2 - definindo uma classe que herda de Component (Componente classe)
*/

// Componentes de função

// Componentes de funcao, ou funcionais sao componentes criados apenas com uma funcao javascript que retorna um componente 

function Greeting(props) {
    return (
      <h1>Hello, {props.name}</h1>
    );
  }
  
  // export default Greeting;

  // Componentes de classe

// Componentes de classe são componentes criados através de uma classe que estende a classe React.Component.

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// export default Greeting;

// PROPS - propriedades

// As props são as propriedades que passamos para os componentes, elas são imutáveis e não podem ser alteradas dentro do componente. 

// EXEMPLO

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

export default Greeting;

