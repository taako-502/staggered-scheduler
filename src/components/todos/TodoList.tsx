import { Todo } from '@/types/todo.type'
import NewTodo from './NewTodo'
import useAxios from '@/hooks/useAxios'
import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

type Props = {
  isActiveNewTodo: boolean
}

const TodoList = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const axios = useAxios()

  useEffect(() => {
    const currentUuid = localStorage.getItem('uuid')
    if (!currentUuid) return

    async function getTodosByUserId(uuid: string) {
      const query = `
        query {
          todosByUserId(userId: "${uuid}"){
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
    getTodosByUserId(currentUuid)
  }, [])

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </ul>
      <NewTodo isActiveNewTodo={props.isActiveNewTodo} />
    </div>
  )
}

export default TodoList
