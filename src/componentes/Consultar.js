import React from 'react';
import axios from 'axios';
import Proyectos from './Proyectos.js';
import Participantes from './Participantes.js';
import Navbar from './Navbar.js';

const Consultar = (props) => {
  // const active = props.active;
  const consultar = true;
  return (
    <>
      <Navbar consultar={consultar} />
      <h1>Consultar</h1>
      <Proyectos />
      <Participantes />
    </>
  );
};

export default Consultar;
