import { convertToDate } from '@/utilities/time.utility'

export type Todo = {
  id: string
  title: string
  description: string
  done: boolean
  dueDateTime: Date
  status: TodoStatus
  createdAt: Date
  updatedAt: Date
}

export type TodoStatus = 'CREATED' | 'COMPLETED'

export const createTodoFromGraphQLData = (todo: any): Todo[] => {
  return todo.map((todo: any) => ({
    ...todo,
    dueDateTime: convertToDate(todo.dueDateTime),
    createdAt: convertToDate(todo.createdAt),
    updatedAt: convertToDate(todo.updatedAt),
  }))
}
