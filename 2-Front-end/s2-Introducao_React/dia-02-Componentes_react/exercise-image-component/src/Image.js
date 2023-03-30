import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props; // Destructuring assignment (ES6) 
    return <img src={ source } alt={ alternativeText } />; // retono o componente img com os atributos src e alt 
  }
}

export default Image;