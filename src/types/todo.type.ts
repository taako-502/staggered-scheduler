export type Todo = {
  id: string
  title: string
  description: string
  done: boolean
  dueDateTime: string
  status: 'CREATED' | 'COMPLETED'
  createdAt: string
  updatedAt: string
}
