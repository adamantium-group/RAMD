import React from 'react';
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default class FindParticipante extends React.Component {
  state = {
    participantes: [],
    text : (' '),
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }   

  buscarProyecto() {
    axios.get(`http://localhost:8080/participantes/`+ this.state.text).then((respuesta) => {
      const participantes = respuesta.data;
      this.setState({ participantes });
    });
  }

  handleChange(event) {    
    this.setState({text: event.target.value});  
  };

  handleSubmit(event) {

    this.buscarProyecto();
    event.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>        <label>
            <input type="text" placeholder = "Ingrese Investigador ID" onChange={this.handleChange} />        </label>
            <input type="submit" value="Buscar" />
        </form>
        <h3>{this.state.text}</h3>        
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
                <>
                  <Tr>
                    <Td>{this.state.participantes.researcherId}</Td>
                    <Td>{this.state.participantes.role}</Td>
                    <Td>{this.state.participantes.firstName}</Td>
                    <Td>{this.state.participantes.lastName}</Td>
                    <Td>{this.state.participantes.phone}</Td>
                    <Td>{this.state.participantes.entryDate}</Td>
                    <Td>{this.state.participantes.career}</Td>
                    <Td>{this.state.participantes.projectId}</Td>
                  </Tr>
                </>
          </Tbody>
        </Table>
      </>
    );
  }
}
