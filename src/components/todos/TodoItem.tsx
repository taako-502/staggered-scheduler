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
import { useEffect, useState } from 'react'

type Props = {
  todo: Todo
  displayTimezoon: ContoryCodeType
  updateTodoInList: (uuid: string) => {}
}

const TodoItem: React.FC<Props> = ({ todo: todosFromDb, displayTimezoon }) => {
  const [todo, setTodo] = useState(todosFromDb)
  const [status, setStatus] = useState(todosFromDb.status)
  const [done, setDone] = useState(todosFromDb.done)

  const displayDueDateTime = (dueDateTime: Date | '') => {
    if (!dueDateTime) return ''
    const timeDifference = getTimeDifference(displayTimezoon)
    const dueDateTimeGMT = addHoursToDate(dueDateTime, timeDifference)
    return formatDateISO8601(dueDateTimeGMT)
  }

  useEffect(() => {
    // FIXME: この実装方法だとdoneフィルタが動作しなくなる
    setTodo({
      ...todo,
      status,
      done,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, done])

  return (
    <li
      className={`pr-4 list-none border-2 border-slate-300 border-solid ${styles['todo-item__li--container']}`}
    >
      <div className="flex items-center justify-center">
        <TodoCheckbox id={todo.id} done={todo.done} setDone={setDone} />
      </div>
      <div className="inline-block">
        <div className="grid grid-cols-2">
          <h2 className="font-bold text-lg">{todosFromDb.title}</h2>
          <p className="text-right">
            {displayDueDateTime(todosFromDb.dueDateTime)}
          </p>
        </div>
        <p>{todosFromDb.description}</p>
        <TodoStatusType id={todo.id} status={status} setStatus={setStatus} />
      </div>
    </li>
  )
}

export default TodoItem
