import './App.css';
import react from 'react';
import projectList from './proyectos.js';
import PersonsList from './participantes.js';

class MenuNavBar extends react.Component{
  render() {
    return (
      <button onClick={this.props.endponit}>{this.props.endponit}</button>
    );
  }
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className ="ProjectoRAMD">RAMD</h1>
        <nav className = "navegacion">
          <ul>
          <button onClick={<projectList/>}>proyectos</button>
          <button onClick={<PersonsList/>}>personas</button>
          </ul>
        </nav>

        <p>
          Cada uno de los links anteriores lleva a un componente que llama la informacion del backend
        </p>
      </header>
    </div>
  );
}

export default App;
