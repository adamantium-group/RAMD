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

export const ADD_PARTICIPANT_MUTATION = gql`
  mutation AddResearcherMutation(
    $firstName: String
    $lastName: String
    $role: String
    $cell: String
    $entryDate: Date
    $career: String
    $assignedHours: Float
  ) {
    addResearcher(
      firstName: $firstName
      lastName: $lastName
      role: $role
      cell: $cell
      entry_date: $entryDate
      career: $career
      assigned_hours: $assignedHours
    ) {
      id
      firstName
      lastName
      role
      cell
      entry_date
      career
      assigned_hours
    }
  }
`;
