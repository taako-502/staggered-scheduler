import { gql } from '@apollo/client'

export const SIGNUP_MUTATION = gql`
  mutation SignUp($username: String!, $password: String!) {
    createUser(input: { username: $username, password: $password }) {
      id
      username
    }
  }
`
export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
    }
  }
`

export const GET_USERS_QUERY = gql`
  query GetUsers {
    users {
      id
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
