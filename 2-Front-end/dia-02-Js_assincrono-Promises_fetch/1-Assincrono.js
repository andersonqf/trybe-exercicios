// o que é um codigo assincrono?
// Código assíncrono em JavaScript é um tipo de código que permite que múltiplas tarefas sejam executadas simultaneamente, sem bloquear o processo de execução. Isso é especialmente útil para tarefas que podem levar algum tempo para serem concluídas, como fazer uma solicitação de rede ou ler um arquivo do disco.

// exemplo de codigo assincrono

console.log("Log 1");

setTimeout(() => console.log("Async log"), 1000);

console.log("Log 2");
console.log("Log 3");

// Log 1
// Log 2
// Log 3
// Async log

