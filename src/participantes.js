import React from 'react';
import axios from 'axios';

export default class PersonsList extends React.Component {
  state = {
    participantes: ['Lucia','Camilo']
  }
/*
  componentDidMount() {
    axios.get(`https://localhost:XXXX`)
      .then(respuesta => {
        const participantes = respuesta.data;
        this.setState({ participantes });
      })
  }
*/
  render() {
    return (
      <ul>
        { this.state.participantes.map(participante => <li>{participante.name}</li>)}
      </ul>
    )
  }
}