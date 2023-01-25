let pessoa1 = { nome: "João", idade: 25 };
let pessoa2 = { endereco: "Rua das Flores", cidade: "São Paulo" };

let pessoa = { ...pessoa1, ...pessoa2 };
console.log(pessoa);

