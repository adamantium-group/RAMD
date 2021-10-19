import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_PARTICIPANTS } from '../GraphQL/Queries';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function GetParticipants() {
  const { error, loading, data } = useQuery(LOAD_PARTICIPANTS);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    if (data) {
      setParticipants(data.getResearchers);
    }
    console.log(data);
  }, [data]);

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
            {/* <Th>Id Proyecto(s)</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {participants.map((participant) => {
            return (
              <>
                <Tr>
                  <Td>{participant.id.substring(0, 7)}</Td>
                  <Td>{participant.role}</Td>
                  <Td>{participant.firstName}</Td>
                  <Td>{participant.lastName}</Td>
                  <Td>{participant.cell}</Td>
                  <Td>{participant.entry_date}</Td>
                  <Td>{participant.career}</Td>
                  {/* <Td>{participant.projectId}</Td> */}
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}

export default GetParticipants;
