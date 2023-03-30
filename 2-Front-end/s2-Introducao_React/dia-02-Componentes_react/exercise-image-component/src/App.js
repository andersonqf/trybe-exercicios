import React, { Component } from 'react'
import Image from './Image'
import staringCat from './staringCat.jpg'

/* Qual é o nome do componente declarado acima? R = Image

Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem ou o texto: Cute cat staring, caso a imagem não consiga ser carregada. */

class App extends Component {
  render() {
    return (
      <div> 
        <Image source={ staringCat } alternativeText="Cut cat staring" />  {/* chama o componente Image e passa os atributos source e alternativeText */}
      </div>
    )
  }
}

export default App
