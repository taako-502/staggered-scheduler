import { gql } from '@apollo/client'

export const TODOS_BY_USER_ID_QUERY = gql`
  query TodosByUserId($userId: ID!) {
    todosByUserId(userId: $userId) {
      id
      title
      description
      done
      dueDateTime
      status
      createdAt
      updatedAt
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
