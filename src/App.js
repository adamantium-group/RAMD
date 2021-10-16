import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componentes/Home.js';
import Agregar from './componentes/Agregar.js';
import Consultar from './componentes/Consultar.js';
import Gestionar from './componentes/Gestionar.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/agregar">
            <Agregar />
          </Route>
          <Route exact path="/consultar">
            <Consultar />
          </Route>
          <Route exact path="/gestionar">
            <Gestionar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
