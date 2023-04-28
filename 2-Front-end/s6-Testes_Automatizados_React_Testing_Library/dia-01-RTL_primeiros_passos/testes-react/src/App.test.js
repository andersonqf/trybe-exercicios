import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react';
import React from 'react';
import App from './App';

// Os passaos para fazer um teste são:
// 1. acessar os elementos da tela
// 2. interagir com elementos (se necessario)
// 3. fazer os testes
describe('Teste da aplicação toda', () => {
  it ('Verifica se existe um input de email na tela', () => {
  // 1. acessar os elementos da tela
    render(<App />);
  // 3. Fazer os testes
    const inputEmail = screen.getAllByLabelText("Email");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
  });

  it ('Verifica se existe um botão de enviar na tela', () => {
    render(<App />);
    const button = screen.getAllByRole("button"); // getAllByRole retorna um array com todos os botoes da tela
    expect(button).toHaveLength(2); // verifica se o array tem 2 botoes
    expect(button[0]).toBeInTheDocument(); // verifica se o primeiro botao esta na tela
    expect(button[0].type).toBe("button"); // verifica se o primeiro botao é do tipo button
    const btn = screen.getByTestId("id-send");
    expect(btn).toBeInTheDocument(); // verifica se o botao com o id-send esta na tela
    expect(btn.type).toBe("button"); // verifica se o botao com o id-send é do tipo button
    expect(btn.value).toBe("Enviar"); // verifica se o botao com o id-send tem o valor "Enviar"
    expect(btn).toHaveValue("Enviar"); // verifica se o botao com o id-send tem o valor "Enviar"
    expect(btn).toHaveProperty("value", "Enviar"); // verifica se o botao com o id-send tem o valor "Enviar"
    expect(btn).toHaveAttribute("type", "button"); // verifica se o botao com o id-send tem o atributo type com o valor "button"
  }); 

  it('Verifica que, ao digitar um email e clicar no botão "Enviar", o email é renderizado', () => {
  // Os passaos para fazer um teste são:
  // 1. acessar os elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");
  const btn = screen.getByTestId("id-send");
  const emailUser = screen.getByTestId("email-user");
  /* OBS. Importar o userEvent  */

  // 2. interagir com elementos (se necessario)
  userEvent.type(inputEmail, "teste@teste.com");
  userEvent.click(btn);

  // 3. fazer os testes
  expect(inputEmail).toHaveValue(""); // verifica se o input de email esta vazio apos clicar no botao
  expect(emailUser).toHaveTextContent("Valor: teste@teste.com"); // verifica se o email digitado foi renderizadoddd
  });
  /* screen.logTestingPlaygroundURL(); */ // imprime no console a url do playground
});