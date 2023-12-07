import { Todo } from '@/types/todo.type'
import TodoCheckbox from './TodoCheckbox'
import TodoStatusType from './TodoStatus'
import styles from './TodoItem.module.scss'
import {
  ContoryCodeType,
  addHoursToDate,
  formatDateISO8601,
  getTimeDifference,
} from '@/utilities/time.utility'

type Props = {
  todo: Todo
  displayTimezoon: ContoryCodeType
  updateTodoInList: (uuid: string) => {}
}

const TodoItem = (props: Props) => {
  const displayDueDateTime = (dueDateTime: Date | '') => {
    if (!dueDateTime) return ''
    const timeDifference = getTimeDifference(props.displayTimezoon)
    const dueDateTimeGMT = addHoursToDate(dueDateTime, timeDifference)
    return formatDateISO8601(dueDateTimeGMT)
  }

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
            {displayDueDateTime(props.todo.dueDateTime)}
          </p>
        </div>
        <p>{props.todo.description}</p>
        <TodoStatusType id={props.todo.id} status={props.todo.status} />
      </div>
    </li>
  )
}

export default TodoItem
