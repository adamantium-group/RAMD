import React from 'react';
import axios from 'axios';
import Navbar from './Navbar.js';

const Agregar = (props) => {
  // const active = props.active;
  const agregar = true;
  return (
    <>
      <Navbar agregar={agregar} />
      <h1>Agregar</h1>
    </>
  );
};

export default Agregar;
