import React from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// import styled from 'styled-components';

export default class Proyectos extends React.Component {
  state = {
    proyectos: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/proyectos`).then((respuesta) => {
      const proyectos = respuesta.data;
      this.setState({ proyectos });
    });
  }

  render() {
    return (
      <>
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Título</Th>
              <Th>Descripción</Th>
              <Th>Estado</Th>
              <Th>Fase</Th>
              <Th>Presupuesto</Th>
              <Th>Fecha inicio</Th>
              <Th>Fecha finalización</Th>
              <Th>Id Investigador(es)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.proyectos.map((proyecto) => {
              return (
                <>
                  <Tr>
                    <Td>{proyecto.projectId}</Td>
                    <Td>{proyecto.title}</Td>
                    <Td>{proyecto.description}</Td>
                    <Td>{proyecto.status}</Td>
                    <Td>{proyecto.phase}</Td>
                    <Td>{proyecto.budget}</Td>
                    <Td>{proyecto.startDate}</Td>
                    <Td>{proyecto.finishDate}</Td>
                    <Td>{proyecto.researcherId}</Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </>
    );
  }
}
