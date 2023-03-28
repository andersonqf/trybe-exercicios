/*  <h2 class="coins-title"> Valores referente a 1 USD</h2>
        <ul class="coins">
            <li class="coin">ASD <span class="yellow">3.251</span></li>
        </ul> */
const coinsTitle = document.querySelector('.coins-title');
const coinsListElement = document.querySelector('.coins');

export default function creatCoinElement(name, value) { // essa funcao devera criar as <li>
  const coinElement = document.createElement('li'); // aqui vai criar um elemento com tag li
  coinElement.classList.add('coin');
  coinElement.innerHTML = `${name} <span>${value}</span>`;
  return coinElement;
}

// Agora vamos criar a descricao do <h2>
// tb os nome e os valores que ficaram dentro das <li> que precisa ser um array [ { name:"USD", value: 5,28 }]
export function renderCoins(coins, baseCoins) {
  coinsTitle.innerHTML = `Valores referentes a 1 ${baseCoins}`;
  coinsListElement.innerHTML = ''; // limpando as list <ul>

  // cria as <ul> <li ...
  coins.forEach((coin) => {
    const coinElement = creatCoinElement(coin.name, coin.value); // criou a <li>
    coinsListElement.appendChild(coinElement);
  });
}
