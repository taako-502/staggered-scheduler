import { Todo, createTodoFromGraphQLData } from '@/types/todo.type'
import NewTodo from './NewTodo'
import useAxios from '@/hooks/useAxios'
import { useCallback, useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { ContoryCodeType } from '@/utilities/time.utility'
import TimezoonSelect from '../inputs/TimezoonSelect'
import ShowDoneCheckbox from '../inputs/ShowDoneCheckbox'

type Props = {
  isActiveNewTodo: boolean
  setIsActiveNewTodo: (isActiveNewTodo: boolean) => void
}

const TodoList = (props: Props) => {
  const [displayDone, setDisplayDone] = useState<boolean>(false)
  const [displayTimezoon, setDisplayTimezoon] = useState<ContoryCodeType>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [uuid, setUuid] = useState<string>('')
  const axios = useAxios()

  const getTodosByUserId = useCallback(
    async (uuid: string) => {
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
    },
    [axios],
  )

  useEffect(() => {
    setUuid(localStorage.getItem('uuid'))
    if (!uuid) return
    getTodosByUserId(uuid)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uuid])

  return (
    <div>
      <TimezoonSelect
        displayTimezoon={displayTimezoon}
        setDisplayTimezoon={setDisplayTimezoon}
      />
      <ShowDoneCheckbox setDisplayDone={setDisplayDone} />
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
