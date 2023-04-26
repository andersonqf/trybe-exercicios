import React, { Component } from 'react'

class App extends Component {
  state= {
    email: "",
    saveEmail: "",
  }
  changeEmail(value) {
    this.setState({ email: value });
  }
  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: "" });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div>
        <label htmlFor="email">
          Email
        <input 
          id="email"
          data-testid="id-email"
          type="email"
          value={email}
          onChange={(event) => this.changeEmail(event.target.value)}
        />
        </label>
        <label htmlFor="saveEmail">
          <input 
            id="saveEmail"
            type="button"
            value="Enviar"
            data-testid="id-send"
            onClick={() => this.changeSaveEmail(email)}
          />
          </label>
          <input id='btn' type="button" value="Voltar" />
          <p data-testid="email-user">{`Valor: ${saveEmail}`}</p>
      </div>
    )
  }
}

export default App
