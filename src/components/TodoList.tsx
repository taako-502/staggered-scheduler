import { Todo } from '@/types/todo.type'

type Props = {
  todos: Todo[]
}

const TodoList = (props: Props) => {
  if (!props.todos || !Array.isArray(props.todos)) return

  return (
    <div>
      <h1>TodoList</h1>
      {props.todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>
      })}
    </div>
  )
}

export default TodoList
