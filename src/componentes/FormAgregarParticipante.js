import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

const FormAgregarParticipante = () => {
  const [name, setName] = useState('');
  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
};

export default FormAgregarParticipante;
