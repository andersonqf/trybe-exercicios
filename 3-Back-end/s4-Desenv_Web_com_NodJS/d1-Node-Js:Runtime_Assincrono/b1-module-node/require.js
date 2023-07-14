const path = require('path'); // modulo nativo do node para trabalhar com caminhos de arquivos e pastas do sistema operacional 

console.log(path.basename(__filename)); // basename retorna o nome do arquivo que está sendo executado 
console.log(path.basename(__dirname)); // basename retorna o nome do diretorio que está sendo executado
console.log(path.dirname(__filename)); // dirname retorna o caminho do diretorio que está sendo executado
console.log(path.extname(__filename)); // extname retorna a extensão do arquivo que está sendo executado
console.log(path.parse(__filename)); // parse retorna um objeto com as informações do arquivo que está sendo executado
console.log(path.parse(__filename).base); // parse retorna um objeto com as informações do arquivo que está sendo executado
console.log(path.join(__dirname, 'src', 'teste.js')); // join retorna o caminho completo do arquivo que está sendo executado
console.log(path.resolve(__dirname, 'src', 'teste.js')); // resolve retorna o caminho completo do arquivo que está sendo executado
