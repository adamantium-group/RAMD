import React from 'react';
import axios from 'axios';

export default class projectList extends React.Component {
  state = {
    projects: ['bio','petroleo']
  }
/*
  componentDidMount() {
    axios.get(`https://localhost:XXXX`)
      .then(respuesta => {
        const projects = respuesta.data;
        this.setState({ projects });
      })
  }
*/
  render() {
    return (

      <ul>
        { this.state.projects.map(project => <li>{project.name}</li>)}
      </ul>
    )
  }
}