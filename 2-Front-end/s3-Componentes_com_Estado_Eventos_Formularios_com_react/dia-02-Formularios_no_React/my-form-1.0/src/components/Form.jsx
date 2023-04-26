import React, { Component } from 'react'

class Form extends Component {
    constructor() { // 2 - Cria o estado do componente dentro do construtor
        super();
        this.state = {
          name: "",
          email: "",
          age: "",
          anecdote: "",
        }
        this.handleChange = this.handleChange.bind(this); // 4 - Cria o bind para que o handleChange seja chamado dentro do construtor
    }
/*     handleChange (event) { // 3 - Cria a função handleChange para que o estado seja atualizado conforme o usuário digita no formulário
        this.setState ({ // 3.1 - Cria o setState que tem a função de atualizar o estado
            email: event.target.value, // 3.2 direciona o valor do input para o estado
        })
    } */
    handleChange({ target }) { // 3 o item 3 anterior usava somente 1 imput, agora com o destructuring, podemos usar mais de um imput
       const { name } = target;
      const value = (target.type === 'checkbox') ? target.checked : target.value;
      this.setState({
        [name]: value,
      })
    }
  render() { // 1 - Primeiro cria o formulário dentro da funcao render, depois cria o estado e depois cria o handleChange para que o estado seja atualizado conforme o usuário digita no formulário e por fim, cria o value no input para que o estado seja atualizado conforme o usuário digita no formulário.
    const { email, name, age, anecdote, terms } = this.state; // 5 - Cria a desestruturação para que o estado seja atualizado conforme o usuário digita no formulário

    return (  
      <>
      <h1> Estados e React - Formulários</h1>
      <form action="">
        <label htmlFor=" name"> Nome:
          <input 
            id='name' 
            name='name' 
            type='text' 
            onChange={ this.handleChange}
            value={ name }
          />
        </label>
        <label htmlFor="email"> 
            Email:
          <input 
            id='email' 
            name='email' 
            type="email" 
            onChange={ this.handleChange } // 6 - Cria o onChange que tem a funcao de chamar o handleChange
            value={email}
          />
       </label> 
       <label htmlFor="age"> Idade: 
            <select id='age' name='age' defaultValue="" >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
                onChange={ this.handleChange }
                value={ age }
            </select>
        </label>
        <label htmlFor="anecdote">
            Anedota:
            <textarea 
            id="anecdote" 
            name="anecdote"
            onChange={ this.handleChange }
            value={ anecdote }
            />
        </label>
        <label htmlFor="terms">
          <input
            id="terms"
            type="checkbox"
            name="terms"
            onChange={ this.handleChange }
            value={ terms }
          />
          Concordo com termos e acordos
        </label>

        <input type="file" />
      </form>

      </>
    )
  }
}

export default Form