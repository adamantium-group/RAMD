import React from 'react';
import Navbar from './Navbar.js';
// import ContainerMain from './ContainerMain.js';
import styled from 'styled-components';
// import Container from './Container.js';
import TabInfo from './TabInfo.js';

const Home = () => {
  const home = {
    title: 'Consulta. Gestiona. Lidera',
    text: 'Turpis tortor tincidunt enim ac eget donec feugiat enim hendrerit nibh ut libero malesuada fermentum risus, diam sapien, aenean urna et ornare laoreet proin nulla',
  };
  return (
    <>
      <Navbar />
      <StyledContainer>
        <TabInfo home={home} />
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

export default Home;
