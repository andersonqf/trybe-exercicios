//metodo fecht() é uma forma mais simples de fazer requisições assíncronas e retorna uma promise que pode ser tratada com then() e catch();

//sintaxe:
/* fetch(URL, config); */

//exemplo:

fetch('http://1dummyjson.com/quotes/random')
    .then((response) => response.json())  // then() é um método que recebe uma função de callback que será executada quando a promise for resolvida e retorna uma promise que pode ser tratada com then() e catch();
    // response.json() é um método que retorna uma promise que pode ser tratada com then() e catch();
    .then((data) => console.log(`fetch(): ${data.quote} | ${data.author}`))
    // para tratar um possivel erro na requisição, usamos o catch()
    .catch((error) => console.log(`Erro na requisição: ${error.message}`)) // catch() é um método que recebe uma função de callback que será executada quando a promise for rejeitada


// exemplo2:

//Para fazer uma requisição usando o método fetch, precisamos passar a URL da API que queremos acessar. Para esse exemplo, vamos usar a o endereço https://api.goprogram.ai/inspiration, que deve nos retornar um objeto no formato:

fetch('https://api.goprogram.ai/inspiration')
    .then((response) => response.json()) 
    .then(data => console.log(`"${data.quote}" | ${data.author}`));

// exemplo3: TRATANDO ERRO EM REQUISIÇÕES

// Para tratar um erro na requisição, usamos o catch(). Vamos fazer uma requisição para uma API que não existe, para vermos como o catch() funciona:

fetch('https://invalid.dummyjson.com/products/27')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(`Erro ao fazer a requisição: ${error.message}`));

