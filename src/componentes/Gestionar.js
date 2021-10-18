import React from 'react';
import axios from 'axios';
import Navbar from './Navbar.js';

const Gestionar = (props) => {
  // const active = props.active;
  const gestionar = true;
  return (
    <>
      <Navbar gestionar={gestionar} />
      <h1>Gestionar</h1>
    </>
  );
};

export default Gestionar;
