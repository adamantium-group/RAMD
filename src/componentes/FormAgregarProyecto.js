import React from 'react';
import { useState } from 'react';
// import ReactDOM from 'react-dom';

const FormAgregarProyecto = () => {
  const [id, setId] = useState('');
  const [titulo, setTitulo] = useState('');
  const [estado, setEstado] = useState('');
  const [fase, setFase] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${id},${titulo},${estado},${fase}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        Titulo:
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </label>
      <label>
        Estado:
        <input
          type="text"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
      </label>
      <label>
        Fase:
        <input
          type="text"
          value={fase}
          onChange={(e) => setFase(e.target.value)}
        />
      </label>
    </form>
  );
};

export default FormAgregarProyecto;
