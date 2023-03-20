// O endpoint da API que deverá ser usada é https://api.exchangerate.host/latest?base=${moeda}
import { renderCoins } from './components';
import './style.css';

const searchBtn = document.querySelector('search-btn');
const coinInput = document.querySelector('coin-input');

/* const fakeCoins = [
  { name: 'USD', value: 5.280 },
  { name: 'EUR', value: 5.570 },
];

renderCoins(fakeCoins, 'BRL'); */

function fetchRates(searchedCoin) {
  return fetch(`https://api.exchangerate.host/latest?base=${searchedCoin}`)
    .then((response) => response.json());
}

function handleSearch() {
  const searchedCoin = coinInput.value;

  // Buscando a moeda pesquisada pelo usuario
  fetchRates(searchedCoin)
    .then((dados) => {
      // console.log(dados); // verficiando se a resposta da API está vindo
      // reagido a resposta da API
      const { rates, base } = dados;
      // transformando o objeto rates em um array de [[key, value]]
      const ratesArray = Object.entries(rates);
      // console.log(ratesArray); // verificando se o array está sendo criado
      // transformando o array de [[key, value]] em um array de objetos no formato [{ name: key, value: value }]
      const ratesArrayObjects = ratesArray
        .map((rate) => ({ name: rate[0], value: rate[1] }
        ));
      renderCoins(ratesArrayObjects, base);
    });
  // console.log(ratesArrayObjects); // verificando se o array de objetos está sendo criado
}
searchBtn.addEventListener('click', handleSearch);
