import React from 'react';
import Navbar from './Navbar.js';
import styled from 'styled-components';
import TabInfo from './TabInfo.js';
import { useState } from 'react';

const Consultar = (props) => {
  const consultar = {
    title: '¿Qué deseas consultar?',
    text: 'En esta pestaña encontrarás toda la información relacionada con los proyectos cargados actualmente en Ramdify. De igual forma podrás visualizar todos los participantes (investigadores) vinculados con los proyectos.',
  };

  return (
    <>
      <Navbar consultar={consultar} />
      <StyledContainer>
        <TabInfo consultar={consultar} />
      </StyledContainer>
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

export default Consultar;
