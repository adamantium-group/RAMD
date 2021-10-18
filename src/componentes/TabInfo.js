import React from 'react';
import { useState } from 'react';
import Proyectos from './Proyectos.js';
import Participantes from './Participantes.js';
import styled from 'styled-components';

const TabInfo = (props) => {
  const home = props.home;
  const gestionar = props.gestionar;
  const agregar = props.agregar;
  const consultar = props.consultar;

  const [answer, setAnswer] = useState(true);
  const toggleAnswer = () => setAnswer(!answer);

  const InputStyle = {
    marginRight: 10,
  };

  return (
    <>
      {home ? (
        <>
          <Styledh1>{home.title}</Styledh1>
          <Styledp>{home.text}</Styledp>
        </>
      ) : gestionar ? (
        <>
          <Styledh1>{gestionar.title}</Styledh1>
          <Styledp>{gestionar.text}</Styledp>
        </>
      ) : agregar ? (
        <>
          <Styledh1>{agregar.title}</Styledh1>
          <Styledp>{agregar.text}</Styledp>
        </>
      ) : (
        <>
          <Styledh1>{consultar.title}</Styledh1>
          <Styledp>{consultar.text}</Styledp>
          <WrapperRadio>
            <LabelRadio>
              <input
                type="radio"
                value={true}
                name="opciones"
                onClick={toggleAnswer}
                checked={answer}
                style={InputStyle}
              />
              Proyectos
            </LabelRadio>
            <LabelRadio>
              <input
                type="radio"
                value={false}
                name="opciones"
                onClick={toggleAnswer}
                style={InputStyle}
              />
              Participantes
            </LabelRadio>
          </WrapperRadio>
          {answer ? (
            <>
              <Proyectos />
            </>
          ) : (
            <>
              <Participantes />
            </>
          )}
        </>
      )}
    </>
  );
};

const Styledh1 = styled.h1`
  font-weight: 800;
  font-size: 32px;
  text-align: start;
  margin-bottom: 100px;
  color: #ffffff;
`;

const Styledp = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-align: start;
  margin-bottom: 50px;
  color: #ffffff;
`;

const WrapperRadio = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LabelRadio = styled.label`
  font-weight: 700;
  font-size: 26px;
  text-align: start;
  color: #ffffff;
  /* margin-left: 10px; */
`;

export default TabInfo;