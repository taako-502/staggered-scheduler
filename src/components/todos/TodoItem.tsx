import { Todo } from '@/types/todo.type'
import TodoCheckbox from './TodoCheckbox'
import TodoStatus from './TodoStatus'
import styles from './TodoItem.module.scss'
import { formatDateISO8601 } from '@/utilities/time.utility'

type Props = {
  todo: Todo
  updateTodoInList: (uuid: string) => {}
}

const TodoItem = (props: Props) => {
  return (
    <li
      className={`pr-4 list-none border-2 border-slate-300 border-solid ${styles['todo-item__li--container']}`}
    >
      <div className="flex items-center justify-center">
        <TodoCheckbox
          id={props.todo.id}
          done={props.todo.done}
          updateTodoInList={props.updateTodoInList}
        />
      </div>
      <div className="inline-block">
        <div className="grid grid-cols-2">
          <h2 className="font-bold text-lg">{props.todo.title}</h2>
          <p className="text-right">
            {formatDateISO8601(props.todo.dueDateTime)}
          </p>
        </div>
        <p>{props.todo.description}</p>
        <TodoStatus id={props.todo.id} status={props.todo.status} />
      </div>
    </li>
  )
}

export default TodoItem
