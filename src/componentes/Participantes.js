import React from 'react';
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';

export default class Participantes extends React.Component {
  state = {
    participantes: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/participantes`)
      .then(respuesta => {
        const participantes = respuesta.data;
        this.setState({ participantes });
      })
  }

  render() {
    return (
      <Fragment>
            <h3>Lista de investigadores</h3>
            <hr />
            <div className = 'TituloTablas'>
                <tr>
                    <th>ID</th>
                    <th>ROL</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO</th>
                    <th>TELEFONO</th> 
                    <th>INGRESO</th> 
                    <th>CARRERA</th> 
                    <th>ID PROYECTO</th> 
                </tr>
                    <td></td>
                    <td>{this.state.participantes.map(participante => <li>{participante.role}</li>)}</td>
                    <td>{this.state.participantes.map(participante => <li>{participante.firstName}</li>)}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
            </div>
      <ul>
        {this.state.participantes.map(participante => <li>{participante.role}</li>)}
        
      </ul>
      </Fragment>

    )
  }
}