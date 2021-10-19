import { gql } from '@apollo/client';

export const ADD_PROJECT_MUTATION = gql`
  mutation AddProjectMutation(
    $numeral: Int
    $title: String
    $description: String
    $status: String
    $phase: String
    $budget: Float
    $date: Date
  ) {
    addProject(
      numeral: $numeral
      title: $title
      description: $description
      status: $status
      phase: $phase
      budget: $budget
      date: $date
    ) {
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
