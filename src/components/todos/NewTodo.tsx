import useAxios from '@/hooks/useAxios'
import {
  ContoryCodeType,
  convertToGMT,
  getTimeDifference,
  subtractHoursFromDate,
} from '@/utilities/time.utility'
import { useEffect, useState } from 'react'
import ErrorMessage from '../ErrorMessage'
import TodoTitleText from '../inputs/text/TodoTitleText'
import TodoDescriptionText from '../inputs/text/TodoDescriptionText'
import DueDateTime from '../inputs/DueDateTime'
import TodoAddButton from '../inputs/buttons/TodoAddButton'
import AddTodoTimezoonSelect from '../inputs/select/AddTodoTimezoonSelect'

type Props = {
  isActiveNewTodo: boolean
  setIsActiveNewTodo: (isActiveNewTodo: boolean) => void
  updateTodoInList: (uuid: string) => {}
}

const NewTodo: React.FC<Props> = ({
  isActiveNewTodo,
  setIsActiveNewTodo,
  updateTodoInList,
}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDateTime, setDueDateTime] = useState<Date | ''>('')
  const [contoryCd, setContoryCd] = useState<ContoryCodeType>('')
  const [uuid, setUuid] = useState('')
  const [error, setError] = useState('')
  const axios = useAxios()

  useEffect(() => {
    const uuid = localStorage.getItem('uuid')
    if (uuid) {
      setUuid(uuid)
    }
  }, [])

  if (!isActiveNewTodo) return

  const newTodo = async () => {
    if (!title) {
      setError('titleは必須です')
      return
    }

    const timeDifference = getTimeDifference(contoryCd)
    const dueDateTimeGMT = dueDateTime
      ? subtractHoursFromDate(convertToGMT(dueDateTime), timeDifference)
      : ''
    const query = `
      mutation {
        createTodo(input: {
          title: "${title}"
          description: "${description}"
          dueDateTime: "${dueDateTimeGMT}"
          userId: "${uuid}"
        }) {
          id
        }
      }
    `
    try {
      await axios.post('/query', { query })
      clear()
      updateTodoInList(uuid)
    } catch {
      console.error('error')
    }
  }

  const clear = () => {
    setTitle('')
    setDescription('')
    setDueDateTime('')
    setError('')
    setIsActiveNewTodo(false)
  }

  return (
    <div>
      <div className="mt-4 flex">
        <TodoTitleText title={title} setTitle={setTitle} />
      </div>
      <div className="mt-4 flex">
        <TodoDescriptionText
          description={description}
          setDescription={setDescription}
        />
      </div>
      <div className="mt-4 flex">
        <DueDateTime
          dueDateTime={dueDateTime}
          setDueDateTime={setDueDateTime}
        />
        <AddTodoTimezoonSelect
          contoryCd={contoryCd}
          setContoryCd={setContoryCd}
        />
      </div>
      <div className="text-right">
        <TodoAddButton handler={newTodo} />
      </div>
      {error && <ErrorMessage message={error} />}
    </div>
  )
}

export default NewTodo
