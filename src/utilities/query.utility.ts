import { gql } from '@apollo/client'

export const GET_USERS_QUERY = gql`
  query GetUsers {
    users {
      id
      username
    }
  }
`

export const GET_USER_BY_ID_QUERY = gql`
  query GetUserById($id: ID!) {
    userById(id: $id) {
      username
    }
  }
`

export const IS_ADMIN_QUERY = gql`
  query IsAdmin($id: String!) {
    userById(id: $id) {
      id
      isAdmin
    }
  }
`
