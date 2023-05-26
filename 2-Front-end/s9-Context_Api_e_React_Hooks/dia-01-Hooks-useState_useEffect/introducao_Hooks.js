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

//dica para estudar hooks >useMemo e useCallback, useRef, useFetch, useForm

//useMemo
 
// O useMemo e um Hook que permite memoizar valores. Memoizar significa armazenar em cache o valor de uma variavel para que ela nao precise ser recriada toda vez que o componente for renderizado. O useMemo recebe dois argumentos: o primeiro e uma funcao que retorna o valor a ser armazenado em cache, e o segundo e um array que contem as variaveis que, quando forem alteradas, fazem com que o valor seja recriado.

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

//useCallback

// O useCallback e um Hook que permite memoizar funcoes. Memoizar significa armazenar em cache o valor de uma variavel para que ela nao precise ser recriada toda vez que o componente for renderizado. O useCallback recebe dois argumentos: o primeiro e uma funcao que retorna a funcao a ser armazenada em cache, e o segundo e um array que contem as variaveis que, quando forem alteradas, fazem com que a funcao seja recriada.

// const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]); // memoizedCallback e uma funcao que retorna a funcao doSomething(a, b) e so sera recriada quando a ou b forem alterados.

//useRef

// O useRef e um Hook que permite criar uma referencia para um elemento do DOM. O useRef recebe um argumento, que e o valor inicial da referencia, e retorna um objeto com a propriedade current, que e a referencia para o elemento do DOM.

// const refContainer = useRef(initialValue); // refContainer e um objeto com a propriedade current, que e a referencia para o elemento do DOM.

//useFetch

// O useFetch e um Hook que permite realizar requisicoes HTTP. O useFetch recebe um argumento, que e a URL para a qual sera feita a requisicao, e retorna um objeto com as propriedades data, error e loading, que sao, respectivamente, os dados retornados pela requisicao, o erro retornado pela requisicao e um booleano que indica se a requisicao esta em andamento.

// const { data, error, loading } = useFetch(url); // data, error e loading sao, respectivamente, os dados retornados pela requisicao, o erro retornado pela requisicao e um booleano que indica se a requisicao esta em andamento.

//useForm

// O useForm e um Hook que permite criar um formulario. O useForm recebe um argumento, que e um objeto com os valores iniciais dos campos do formulario, e retorna um objeto com as propriedades form, handleChange e resetForm, que sao, respectivamente, o estado do formulario, a funcao que atualiza o estado do formulario e a funcao que reseta o estado do formulario.

// const { form, handleChange, resetForm } = useForm(initialValues); // form, handleChange e resetForm sao, respectivamente, o estado do formulario, a funcao que atualiza o estado do formulario e a funcao que reseta o estado do formulario.


