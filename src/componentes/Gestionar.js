import React from 'react';
import axios from 'axios';
import Navbar from './Navbar.js';
import styled from 'styled-components';
import TabInfo from './TabInfo.js';

// import Container from './Container.js';

const Gestionar = (props) => {
  // const active = props.active;
  const gestionar = {
    title: '¿Qué deseas gestionar?',
    text: 'Haz clic sobre el ID del proyecto/participante para modificar los campos de tu interés.',
    Id: '------------------',
  };
  return (
    <>
      <Navbar gestionar={gestionar} />
      <StyledContainer>
        <TabInfo gestionar={gestionar} />
      </StyledContainer>
    </>
  );
};
const StyledContainer = styled.div`
  padding-block: 80px;
  min-height: 85vh;
  max-width: 1600px;
  padding-inline: 130px;
  margin: 0 auto;
  border: 1px solid black;
  background: linear-gradient(180deg, #006d81 0%, #01c9d6 100%);
`;
export default Gestionar;
