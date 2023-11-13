import { Todo, createTodoFromGraphQLData } from '@/types/todo.type'
import NewTodo from './NewTodo'
import useAxios from '@/hooks/useAxios'
import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

type Props = {
  isActiveNewTodo: boolean
  setIsActiveNewTodo: (isActiveNewTodo: boolean) => void
}

const TodoList = (props: Props) => {
  const [displayDone, setDisplayDone] = useState<boolean>(false)
  const [todos, setTodos] = useState<Todo[]>([])
  const axios = useAxios()

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
      const todos = result.data.data.todosByUserId
      const convertedTodos = createTodoFromGraphQLData(todos)
      setTodos(convertedTodos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const currentUuid = localStorage.getItem('uuid')
    if (!currentUuid) return

    getTodosByUserId(currentUuid)
  })

  return (
    <div>
      <input
        id="show-done"
        type="checkbox"
        onChange={(e) => setDisplayDone(e.target.checked)}
      />
      <label htmlFor="show-done">Display Closed Schedules</label>
      <ul>
        {todos
          .filter((todo) => displayDone || !todo.done)
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                updateTodoInList={getTodosByUserId}
              />
            )
          })}
      </ul>
      <NewTodo
        isActiveNewTodo={props.isActiveNewTodo}
        setIsActiveNewTodo={props.setIsActiveNewTodo}
        updateTodoInList={getTodosByUserId}
      />
    </div>
  )
}

export default TodoList
