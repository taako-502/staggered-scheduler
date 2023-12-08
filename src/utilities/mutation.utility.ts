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

export const ADMIN_LOGIN_MUTATION = gql`
  mutation AdminLogin($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      isAdmin
    }
  }
`

export const ADD_TODO_MUTATION = gql`
  mutation CreateTodo(
    $title: String!
    $description: String!
    $dueDateTimeGMT: String!
    $uuid: String!
  ) {
    createTodo(
      input: {
        title: $title
        description: $description
        dueDateTime: $dueDateTimeGMT
        userId: $uuid
      }
    ) {
      id
    }
  }
`

export const UPDATE_TODO_STATUS_MUTATION = gql`
  mutation UpdateTodoStatus($id: ID!, $status: String!) {
    updateTodoStatus(id: $id, status: $status) {
      id
      status
    }
  }
`

export const UPDATE_TODO_DONE_MUTATION = gql`
  mutation UpdateTodoDone($id: ID!, $done: Boolean!) {
    updateTodoDone(id: $id, done: $done) {
      id
      done
    }
  }
`
