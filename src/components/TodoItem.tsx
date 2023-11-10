import { Todo } from '@/types/todo.type'
import TodoCheckbox from './TodoCheckbox'

type Props = {
  todo: Todo
}

const TodoItem = (props: Props) => {
  return (
    <li className="border-2 border-slate-300 border-solid">
      <TodoCheckbox id={props.todo.id} status={props.todo.status} />
      <div className="inline-block">
        <h2>{props.todo.title}</h2>
        <p>{props.todo.description}</p>
        <p>{props.todo.dueDateTime}</p>
        <p>{props.todo.status}</p>
      </div>
    </li>
  )
}

export default TodoItem
