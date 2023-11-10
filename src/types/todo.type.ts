export type Todo = {
  id: string
  title: string
  description: string
  done: boolean
  dueDateTime: string
  status: TodoStatus
  createdAt: string
  updatedAt: string
}

export type TodoStatus = 'CREATED' | 'COMPLETED'
