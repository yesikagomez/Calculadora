import React from 'react';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import Calculadora from './Componentes/Calculadora';
export default class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Calculadora/>
      </div>
    );
  }
}