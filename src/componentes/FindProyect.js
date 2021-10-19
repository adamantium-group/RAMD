import React from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { getThemeProps } from '@mui/system';

// import styled from 'styled-components';

export default class FindProyect extends React.Component {
    state = {
        proyectos: [],
        text : (' '),
    };
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    buscarProyecto() {
    axios.get(`http://localhost:8080/proyectos/`+ this.state.text).then((respuesta) => {
      const proyectos = respuesta.data;
      this.setState({ proyectos });
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
            <input type="text" placeholder = "Ingrese Proyecto ID" onChange={this.handleChange} />        </label>
            <input type="submit" value="Buscar" />
        </form>
        <h3>{this.state.text}</h3>
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
                <>
                  <Tr>
                    <Td>{this.state.proyectos.projectId}</Td>
                    <Td>{this.state.proyectos.title}</Td>
                    <Td>{this.state.proyectos.description}</Td>
                    <Td>{this.state.proyectos.status}</Td>
                    <Td>{this.state.proyectos.phase}</Td>
                    <Td>{this.state.proyectos.budget}</Td>
                    <Td>{this.state.proyectos.startDate}</Td>
                    <Td>{this.state.proyectos.finishDate}</Td>
                    <Td>{this.state.proyectos.researcherId}</Td>
                  </Tr>
                </>
          </Tbody>
        </Table>
      </>
    );
  }
}
