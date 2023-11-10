import { Todo } from '@/types/todo.type'
import NewTodo from './NewTodo'
import useAxios from '@/hooks/useAxios'
import { useEffect, useState } from 'react'

type Props = {
  isActiveNewTodo: boolean
}

const TodoList = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const axios = useAxios()

  useEffect(() => {
    const currentUuid = localStorage.getItem('uuid')
    if (!currentUuid) return

    async function getTodosByUserId() {
      const query = `
        query {
          todosByUserId(userId: "${currentUuid}"){
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
      try {
        const result = await axios.post('/query', { query })
        setTodos(result.data.data.todosByUserId)
      } catch (error) {
        console.error(error)
      }
    }
    getTodosByUserId()
  }, [])

  // TODO: 型をハードコーディングしない
  const updateStatus = async (id: string, status: 'CREATED' | 'COMPLETED') => {
    const newStatus = status === 'CREATED' ? 'COMPLETED' : 'CREATED'
    const query = `
      mutation {
        updateTodoStatus(id: "${id}", status: "${newStatus}") {
          id
        }
      }
    `
    try {
      await axios.post('/query', { query })
      window.location.reload()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <h1>TodoList</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              onChange={() => updateStatus(todo.id, todo.status)}
              checked={todo.status === 'COMPLETED'}
            />
            {todo.title}
          </div>
        )
      })}
      <NewTodo isActiveNewTodo={props.isActiveNewTodo} />
    </div>
  )
}

export default TodoList
