// Metodo sincrono

/* const fs = require('fs'); // modulo nativo do node para trabalhar com arquivos do sistema operacional que tem a funcao de ler arquivos de forma SINCRONA .

const nomeDoArquivo = 'meu-arquivo.txt'; // nome do arquivo que será criado

try { // try é uma palavra reservada do javascript que significa tentar, ou seja, tentar executar o codigo dentro do bloco try
  const data = fs.readFileSync(nomeDoArquivo, 'utf8'); // readFileSync é um metodo do modulo fs que recebe dois parametros, o primeiro é o nome do arquivo que será lido e o segundo é o tipo de codificacao que será lido o arquivo
  console.log(data);
} catch (err) { // catch é uma palavra reservada do javascript que significa capturar, ou seja, capturar o erro que aconteceu no bloco try
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
} */

// Metodo assincrono

const fs = require('fs').promises; // modulo nativo do node para trabalhar com arquivos do sistema operacional que tem a funcao de ler arquivos de forma ASSINCRONA.

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()