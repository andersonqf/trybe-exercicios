import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';

import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando a App.js', () => {

    it('deve renderizar o componente App', () => {
       renderWithRouter(<App />);
      
        const homeTitle = screen.getByRole('heading', {
          name: 'Você está na página Início',
        });
        expect(homeTitle).toBeInTheDocument();
      });

    It('Testa se a pargina Search é a primeira a ser renderizada', () => {
        renderWithRouter(<App />);

        const search = screen.getByRole('heading', { level: 1, name: /enciclopédia pokémon/i }); // getByRole retorna o elemento que tem o role passado como parametro (nesse caso o role é heading lvl 1 = h1 e o name é enciclopédia pokémon)
        expect(search).toBeInTheDocument();
        });

    it('deve testar um caminho não existente e a renderização do Not Found', () => {
        const { history } = renderWithRouter(<App />);
    
        act(() => { // o act é usado quando utilizamos funcoes que alteram o estado da aplicação (nesse caso o history.push altera o estado do componente)
          history.push('/pagina/que-nao-existe/');
        })
    
        const notFoundTitle = screen.getByRole('heading',
          { name: 'Página não encontrada' });
        expect(notFoundTitle).toBeInTheDocument();
      });
});



