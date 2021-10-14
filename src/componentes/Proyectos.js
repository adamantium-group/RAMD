import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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
      <Fragment>
        <h3>Lista de Proyectos</h3>
        <hr />
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
            <Tr>
              <Td>P001</Td>
              <Td>Reptiles del Amazonas</Td>
              <Td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut lectus sed massa congue tincidunt. Etiam sagittis lectus nec
                interdum luctus. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nam id erat enim. Sed
                at massa.
              </Td>
              <Td>Inicio</Td>
              <Td>Documentación</Td>
              <Td>15000000</Td>
              <Td>2021-09-18</Td>
              <Td>2021-12-10</Td>
              <Td>IN001</Td>
            </Tr>
          </Tbody>
        </Table>
        <br />
        <ul>
          {this.state.proyectos.map((proyecto) => (
            <li>{proyecto.title}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
