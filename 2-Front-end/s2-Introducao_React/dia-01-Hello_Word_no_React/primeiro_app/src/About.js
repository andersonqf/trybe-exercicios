import React from 'react';

const name ='Anderson'
const description = 'Sou um desenvolvedor Front-End'
const skills = ['HTML', 'CSS', 'JavaScript', 'React']
const habilit = 'softskils'
const habilit2 = 'hardskils'

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          { name }
        </h1>
        <p>
          { description }
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>{  skills  }</li>
          <li>{ habilit }</li>
          <li>{habilit2}</li>                    
        </ul>
      </div>
    );
  }
}
// treinando a aula ao vivo sobre react

function  Apps() {
const names = 'Anderson'
const familia = ['Anderson', 'Maria', 'Joao', 'Jose', 'Maria']

  return (
    <section> 
      <h1 className='comecando-balacobaco'> Comencando o balacobaco </h1>
      <p>  Ola turma 30! </p>
      <p> o aluno que esta estudando se chama { names }. </p>
      <p> A familia do aluno { names } é composta por: { familia } </p>
      {
        familia.map((familia) => <li>{familia}</li>)
      }

    </section>
  )
}
export { Apps, About} ;
