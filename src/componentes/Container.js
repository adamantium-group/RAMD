import React from 'react';
import styled from 'styled-components';
import TabInfo from './TabInfo.js';

const Container = (props) => {
  const home = props.home;
  return (
    <>
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
export default Container;
