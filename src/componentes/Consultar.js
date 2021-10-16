import React from 'react';
import axios from 'axios';
import Proyectos from './Proyectos.js';
import Participantes from './Participantes.js';

const Consultar = () => {
  return (
    <>
      <h1>Consultar</h1>
      <Proyectos />
      <Participantes />
    </>
  );
};

export default Consultar;
