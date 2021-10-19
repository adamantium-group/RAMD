import React from 'react';
import { useState } from 'react';
import { ADD_PROJECT_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';

const FormAgregarProyecto = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [phase, setPhase] = useState('');
  const [budget, setBudget] = useState('');
  const [date, setDate] = useState('');

  const [addProject, { error }] = useMutation(ADD_PROJECT_MUTATION);

  const addPro = () => {
    addProject({
      variables: {
        title: title,
        description: description,
        status: status,
        phase: phase,
        budget: budget,
        date: date,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormDiv>
      <StyledH2>Nuevo Proyecto</StyledH2>
      <StyledFormLabel>
        Title:
        <StyledFormInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Description:
        <StyledFormInput
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Status:
        <StyledFormInput
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Phase:
        <StyledFormInput
          type="text"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Date:
        <StyledFormInput
          type="date"
          value={date}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Budget:
        <StyledFormInput
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
        />
      </StyledFormLabel>
      <Styledbutton onClick={addPro}>Agregar proyecto</Styledbutton>
    </StyledFormDiv>
  );
};

const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 45%;
  padding-inline: 30px;
  padding-block: 30px;
  margin: 0 auto;
  border: 1px solid black;
  background-color: #fff;
  border-radius: 20px;
`;

const StyledFormLabel = styled.label`
  text-align: start;
  /* width: 65%; */
`;

const StyledFormInput = styled.input`
  margin-left: 40px;
  border: 1px solid #b9b9b9;
  border-radius: 10px;
  text-align: center;
`;

const StyledH2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const Styledbutton = styled.button`
  border-radius: 10px;
  text-align: center;
  background-color: #006d81;
  color: #fff;
  padding: 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export default FormAgregarProyecto;
