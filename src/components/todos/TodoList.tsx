import { createTodoFromGraphQLData } from '@/types/todo.type'
import NewTodo from './NewTodo'
import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { ContoryCodeType } from '@/utilities/time.utility'
import TimezoonSelect from '../inputs/select/TimezoonSelect'
import ShowDoneCheckbox from '../inputs/ShowDoneCheckbox'
import { useQuery } from '@apollo/client'
import { TODOS_BY_USER_ID_QUERY } from '@/utilities/query.utility'

type Props = {
  isActiveNewTodo: boolean
  setIsActiveNewTodo: (isActiveNewTodo: boolean) => void
}

const TodoList = (props: Props) => {
  const [displayDone, setDisplayDone] = useState<boolean>(false)
  const [displayTimezoon, setDisplayTimezoon] = useState<ContoryCodeType>('')
  const [uuid, setUuid] = useState<string>('')

  useEffect(() => {
    setUuid(localStorage.getItem('uuid'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uuid])

  const { data, loading, error } = useQuery(TODOS_BY_USER_ID_QUERY, {
    variables: { userId: uuid },
    skip: !uuid,
  })

  const todos = data ? createTodoFromGraphQLData(data.todosByUserId) : []

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

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
              />
            )
          })}
      </ul>
      <NewTodo
        isActiveNewTodo={props.isActiveNewTodo}
        setIsActiveNewTodo={props.setIsActiveNewTodo}
      />
    </div>
  )
}

export default TodoList
