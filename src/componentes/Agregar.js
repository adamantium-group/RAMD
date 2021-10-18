import React from 'react';
import axios from 'axios';
import Navbar from './Navbar.js';
import styled from 'styled-components';
import TabInfo from './TabInfo.js';

const Agregar = (props) => {
  // const active = props.active;
  const agregar = {
    title: '¿Qué deseas agregar?',
    text: 'Desde esta pestaña puedes agregar nuevos proyectos y registrar nuevos participantes (investigadores) a los registros de Ramdify.',
  };
  return (
    <>
      <Navbar agregar={agregar} />
      <StyledContainer>
        <TabInfo agregar={agregar} />
      </StyledContainer>
      <h1>Agregar</h1>
    </>
  );
};

const StyledContainer = styled.div`
  padding-top: 80px;
  max-width: 1600px;
  padding-inline: 130px;
  margin: 0 auto;
  border: 1px solid black;
  background: linear-gradient(180deg, #006d81 0%, #01c9d6 100%);
`;

export default Agregar;
