const fs = require('fs').promises; // modulo nativo do node para trabalhar com arquivos do sistema operacional que tem a funcao de escrever arquivos de forma ASSINCRONA.

async function main() { 
    try {
        await fs.writeFile('./meu-arquivo.txt', 'Meu textão'); // writeFile é um metodo do modulo fs que recebe dois parametros, o primeiro é o nome do arquivo que será escrito e o segundo é o texto que será escrito no arquivo
        console.log('Arquivo escrito com sucesso!');
    } catch (err) {
        console.error(`Erro ao escrever o arquivo: ${err.message}`);
    }
}

main() // Arquivo escrito com sucesso! 