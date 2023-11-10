import { Todo } from '@/types/todo.type'
import NewTodo from './NewTodo'

type Props = {
  todos: Todo[]
  isActiveNewTodo: boolean
}

const TodoList = (props: Props) => {
  if (!props.todos || !Array.isArray(props.todos)) return

  return (
    <div>
      <h1>TodoList</h1>
      {props.todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>
      })}
      <NewTodo isActiveNewTodo={props.isActiveNewTodo} />
    </div>
  )
}

export default TodoList
