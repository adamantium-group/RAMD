import React from 'react';
import Navbar from './Navbar.js';
import styled from 'styled-components';
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
  padding-block: 80px;
  min-height: 85vh;
  max-width: 1600px;
  padding-inline: 130px;
  margin: 0 auto;
  border: 1px solid black;
  background: linear-gradient(180deg, #006d81 0%, #01c9d6 100%);
`;

export default Home;
