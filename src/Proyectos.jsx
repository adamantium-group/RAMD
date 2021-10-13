import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import axios from 'axios';

export default class Proyectos extends React.Component {
    state = {
      proyectos: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:8080/proyectos`)
        .then(respuesta => {
          const  proyectos = respuesta.data;
          this.setState({  proyectos });
        })
    }
  
    render() {
      return ( 
        <Fragment>
            <h3>Lista de Proyectos</h3>
            <hr />
            <div className = 'TituloTablas'>
                <tr>
                    <th>ID</th>
                    <th>TITULO</th>
                    <th>DESCRIPCION</th>
                    <th>ESTADO</th>
                    <th>FASE</th> 
                    <th>BUDGET</th> 
                    <th>INICIO</th> 
                    <th>FINALIZACION</th> 
                    <th>ID INVESTIGADOR</th> 
                </tr>
            </div> 
            <ul>
            { this.state.proyectos.map( proyecto => <li>{proyecto.title}</li>)}
            </ul>
        </Fragment> 
      )
    }
  }

/*
const Proyectos = ({projecto}) =>{
    return(
        <Fragment>
            <h3>Lista de Proyectos</h3>
            <hr />
            <div className = 'projectsTable'>
                <tr>
                    <th>ID</th>
                    <th>TITULO</th>
                    <th>DESCRIPCION</th>
                    <th>ESTADO</th>

                </tr>
            </div>
        </Fragment>
    );
}

export default Proyectos;*/