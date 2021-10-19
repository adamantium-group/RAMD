import { gql } from '@apollo/client';

export const LOAD_PARTICIPANTS = gql`
  query {
    getResearchers {
      id
      firstName
      lastName
      role
      cell
      entry_date
      career
    }
  }
`;

export const LOAD_PROJECTS = gql`
  query {
    getProjects {
      id
      numeral
      title
      description
      status
      phase
      budget
      date
    }
  }
`;
