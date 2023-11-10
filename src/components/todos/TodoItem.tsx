import { Todo } from '@/types/todo.type'
import TodoCheckbox from './TodoCheckbox'
import TodoStatus from './TodoStatus'

type Props = {
  todo: Todo
}

const TodoItem = (props: Props) => {
  return (
    <li className="list-none border-2 border-slate-300 border-solid">
      <TodoCheckbox id={props.todo.id} done={props.todo.done} />
      <div className="inline-block">
        <h2>{props.todo.title}</h2>
        <p>{props.todo.description}</p>
        <p>{props.todo.dueDateTime}</p>
        <TodoStatus id={props.todo.id} status={props.todo.status} />
      </div>
    </li>
  )
}

export default TodoItem
