import './App.css';
import react from 'react';
import Proyectos from './componentes/Proyectos.js';
import Participantes from './componentes/Participantes.js';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="ProjectoRAMD">RAMD</h1>
        <nav className="navegacion">
          <button className="botonNav">Lista de Proyectos</button>
          <button className="botonNav">Lista de personas</button>
        </nav>
        <p>
          Cada uno de los links anteriores lleva a un componente que llama la
          informacion del backend
        </p>
      </header>
      <section className="Consulta proyectos">
        <div className="Consultas">
          <div className="ConsultaParticipantes">
            <Participantes />
          </div>
          <div className="ConsultaProyectos">
            <Proyectos />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
