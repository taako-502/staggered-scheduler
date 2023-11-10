import { Todo } from '@/types/todo.type'
import NewTodo from './NewTodo'
import useAxios from '@/hooks/useAxios'

type Props = {
  todos: Todo[]
  isActiveNewTodo: boolean
}

const TodoList = (props: Props) => {
  const axios = useAxios()

  if (!props.todos || !Array.isArray(props.todos)) return

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
      {props.todos.map((todo) => {
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
