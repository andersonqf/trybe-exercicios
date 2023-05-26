// o que sao os Hooks?
// Hooks sao funcoes especiais do React que podem ser usadas dentro de componentes funcionais para armazenar dados ou para realizar acoes quando algum evento acontecer no componente.
// Hooks sao funcoes, portanto, devem seguir as regras de funcoes do JavaScript. Por exemplo, Hooks devem ser chamados apenas no nivel mais alto de um componente ou dentro de outros Hooks.
// Hooks nao devem ser chamados dentro de loops, condicionais ou funcoes aninhadas. (funcoes dentro de funcoes)
// Hooks sao responsaveis por adicionar estado e ciclo de vida a componentes funcionais.
// Hooks nao funcionam em componentes de classe, apenas em componentes funcionais.

// useState
 
// O useState e um Hook que permite adicionar estado a componentes funcionais. O estado é um objeto que armazena dados sobre o componente que pode ser alterado ao longo do tempo.
// O useState retorna um array com dois elementos: o primeiro elemento e o valor atual do estado, e o segundo elemento e uma funcao que permite atualizar o valor do estado.

// const [state, setState] = useState(initialState); // useState e uma funcao que recebe um argumento, que e o valor inicial do estado, e retorna um array com dois elementos: o primeiro elemento e o valor atual do estado, e o segundo elemento e uma funcao que permite atualizar o valor do estado.

// const [count, setCount] = useState(0); // count = 0 e setCount e uma funcao que altera o valor de count para o valor passado como argumento. 

import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    render (
        <div>
            <div>Counter: { count }</div>
            <div>
                <button
                type='button'
                onClick={() => setCount(count + 1)}    
                >
                </button>
            </div>
        </div>
    )
}

//useEffect 

// O useEffect e um Hook que permite realizar acoes quando algum evento acontecer no componente. O useEffect recebe dois argumentos: o primeiro e uma funcao que sera executada quando o evento acontecer, e o segundo e um array que contem as variaveis que, quando forem alteradas, fazem com que a funcao seja executada novamente.

// useEffect(() => { 
//     // codigo a ser executado
// }, [variavel1, variavel2])

