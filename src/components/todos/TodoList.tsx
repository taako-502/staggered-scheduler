import { Todo, createTodoFromGraphQLData } from '@/types/todo.type'
import NewTodo from './NewTodo'
import useAxios from '@/hooks/useAxios'
import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { ContoryCodeType } from '@/utilities/time.utility'

type Props = {
  isActiveNewTodo: boolean
  setIsActiveNewTodo: (isActiveNewTodo: boolean) => void
}

const TodoList = (props: Props) => {
  const [displayDone, setDisplayDone] = useState<boolean>(false)
  const [displayTimezoon, setDisplayTimezoon] = useState<ContoryCodeType>('')
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
      <label htmlFor="show-timezoon">Display Timezoon</label>
      <select
        id="show-timezoon"
        value={displayTimezoon}
        onChange={(e) => setDisplayTimezoon(e.target.value as ContoryCodeType)}
        className="bg-black"
      >
        <option value="gmt">GMT</option>
        <option value="asia-tokyo">Asia/Tokyo</option>
        <option value="africa-cairo">Africa/Cairo</option>
      </select>
      <input
        id="show-done"
        type="checkbox"
        onChange={(e) => setDisplayDone(e.target.checked)}
      />
      <label htmlFor="show-done">Display Closed Schedules</label>
      <ul>
        {todos
          .sort((a, b) => {
            if (a.updatedAt && b.updatedAt) {
              return b.updatedAt.getTime() - a.updatedAt.getTime()
            }
            return 0
          })
          .filter((todo) => displayDone || !todo.done)
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                displayTimezoon={displayTimezoon}
                updateTodoInList={getTodosByUserId}
              />
            )
          })}
      </ul>
      <NewTodo
        displayTimezoon={displayTimezoon}
        isActiveNewTodo={props.isActiveNewTodo}
        setIsActiveNewTodo={props.setIsActiveNewTodo}
        updateTodoInList={getTodosByUserId}
      />
    </div>
  )
}

export default TodoList
