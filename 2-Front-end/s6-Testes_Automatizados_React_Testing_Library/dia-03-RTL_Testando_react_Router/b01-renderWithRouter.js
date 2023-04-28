// o Render with Router é um componente que renderiza o componente que você passar dentro dele, mas com a diferença de que ele vai ter acesso ao history, location e match do React Router DOM. Isso é necessário porque, para testar as rotas, você precisa ter acesso a essas informações.
// Para usar o Render with Router, você precisa importá-lo do React Router DOM e passar o componente que você quer testar como parâmetro. Por exemplo:

import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{ component }</Router>),
    history,
  });
  }

export default renderWithRouter;''