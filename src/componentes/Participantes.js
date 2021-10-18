import React from 'react';
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default class Participantes extends React.Component {
  state = {
    participantes: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/participantes`).then((respuesta) => {
      const participantes = respuesta.data;
      this.setState({ participantes });
    });
  }

  render() {
    return (
      <>
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Rol</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th>Teléfono</Th>
              <Th>Fecha ingreso</Th>
              <Th>Carrera</Th>
              <Th>Id Proyecto(s)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.participantes.map((participante) => {
              return (
                <>
                  <Tr>
                    <Td>{participante.researcherId}</Td>
                    <Td>{participante.role}</Td>
                    <Td>{participante.firstName}</Td>
                    <Td>{participante.lastName}</Td>
                    <Td>{participante.phone}</Td>
                    <Td>{participante.entryDate}</Td>
                    <Td>{participante.career}</Td>
                    <Td>{participante.projectId}</Td>
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
