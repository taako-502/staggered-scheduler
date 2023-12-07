import { gql } from '@apollo/client'
export const UPDATE_TODO_STATUS_MUTATION = gql`
  mutation UpdateTodoStatus($id: String!, $status: TodoStatus!) {
    updateTodoStatus(id: $id, status: $status) {
      id
    }
  }
`
