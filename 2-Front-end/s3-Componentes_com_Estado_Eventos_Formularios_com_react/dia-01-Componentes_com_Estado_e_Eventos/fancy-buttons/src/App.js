import React, { Component } from 'react'
// Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.

// Agora, ao clicar no botão, a sua cor atual deve ser impressa por meio de um console.log(). Essa lógica precisa ser implementada na mesma função utilizada para aumentar o contador de cliques dos botões.

/* getButtonColor(num) {
 return num % 2 === 0 ? 'green' : 'white'; 
} */

export default class App extends Component {
  constructor() { // a funcao do constructor é inicializar o estado do componente e fazer o bind dos metodos que serão utilizados no componente.
    super(); // a funcao do super é chamar o construtor da classe pai, no caso o Component.
    this.handleClickOne = this.handleClickOne.bind(this); // o bind é utilizado para que o this do metodo handleClickOne seja o this do componente e nao o this do metodo.
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
    this.state = { // o estado do componente é utilizado para armazenar os dados que serão utilizados no componente.
      clicksBtnOne: 0, // aqui é criado um estado para cada botão com valor incial 0.
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }
  }
  handleClickOne() {
   this.setState((state) => ({ // o setState é utilizado para atualizar o estado do componente.
    clicksBtnOne: state.clicksBtnOne + 1, // aqui é utilizado o estado para atualizar o valor de clicksBtnOne.
   }))
  }
  
   handleClickTwo() {
    this.setState((state) => ({ 
      clicksBtnTwo: state.clicksBtnTwo + 1,
    }))
  }
   handleClickThree() {
    this.setState(({clicksBtnThree}) => ({ // aqui é utilizado o destructuring para pegar o valor de clicksBtnThree do estado.
      clicksBtnThree: clicksBtnThree + 1,
    }))
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button onClick={ this.handleClickOne }>{`Cliques botao 1: ${clicksBtnOne}`}</button>  {/* o this do metodo handleClickOne é o this do componente. */}
        <button onClick={ this.handleClickTwo }>{`Cliques botao 2: ${clicksBtnTwo}`}</button>
        <button onClick={ this.handleClickThree }>{`Cliques botao 3: ${clicksBtnThree}`}</button>
      </div>
    )
  }
}

