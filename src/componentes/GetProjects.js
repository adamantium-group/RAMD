import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_PROJECTS } from '../GraphQL/Queries';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function GetProjects() {
  const { error, loading, data } = useQuery(LOAD_PROJECTS);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (data) {
      setProjects(data.getProjects);
    }
    console.log(data);
  }, [data]);

  function roundMillion(budget) {
    return `${budget / 1000000} M (COP)`;
  }

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
            {/* <Th>Fecha finalización</Th>
            <Th>Id Investigador(es)</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((project) => {
            return (
              <>
                <Tr>
                  <Td>{project.id.substring(0, 7)}</Td>
                  <Td>{project.title}</Td>
                  <Td>{project.description}</Td>
                  <Td>{project.status}</Td>
                  <Td>{project.phase}</Td>
                  <Td>{roundMillion(project.budget)}</Td>
                  <Td>{project.date.substring(0, 10)}</Td>
                  {/* <Td>{project.finishDate}</Td>
                  <Td>{project.researcherId}</Td> */}
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}

export default GetProjects;
