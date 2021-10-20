import React from 'react';
import { useState } from 'react';
import { ADD_PARTICIPANT_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';

const FormAgregarParticipante = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [cell, setCell] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [career, setCareer] = useState('');

  const [addResearcher, { error }] = useMutation(ADD_PARTICIPANT_MUTATION);

  const addRes = () => {
    addResearcher({
      variables: {
        firstName: firstName,
        lastName: lastName,
        role: role,
        cell: cell,
        entry_date: entryDate,
        career: career,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormDiv>
      <StyledH2>Nuevo Participante</StyledH2>
      <StyledFormLabel>
        Nombre
        <StyledFormInput
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Apellido
        <StyledFormInput
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Rol
        <StyledFormInput
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Celular
        <StyledFormInput
          type="text"
          value={cell}
          onChange={(e) => setCell(e.target.value)}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Fecha
        <StyledFormInput
          type="date"
          value={entryDate}
          onChange={(e) => setEntryDate(new Date(e.target.value))}
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Carrera
        <StyledFormInput
          type="text"
          value={career}
          onChange={(e) => setCareer(e.target.value)}
        />
      </StyledFormLabel>
      <Styledbutton onClick={addRes}>Agregar participante</Styledbutton>
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

export default FormAgregarParticipante;
