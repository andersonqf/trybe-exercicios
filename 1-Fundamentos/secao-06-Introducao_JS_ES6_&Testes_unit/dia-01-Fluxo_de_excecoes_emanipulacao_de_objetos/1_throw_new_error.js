const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));

  /* Rodando o Run Code (seta de play lado superior direito) aparece o seguinte erro
      throw new Error('Os valores devem ser numéricos');
      ^

Error: Os valores devem ser numéricos */

/* ************************************************************************************************************* */

