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
import { useMutation } from '@apollo/client'
import { ADD_TODO_MUTATION } from '@/utilities/mutation.utility'

type Props = {
  isActiveNewTodo: boolean
  setIsActiveNewTodo: (isActiveNewTodo: boolean) => void
  refetch: () => void
}

const NewTodo: React.FC<Props> = ({
  isActiveNewTodo,
  setIsActiveNewTodo,
  refetch,
}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDateTime, setDueDateTime] = useState<Date | ''>('')
  const [contoryCd, setContoryCd] = useState<ContoryCodeType>('')
  const [uuid, setUuid] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const uuid = localStorage.getItem('uuid')
    if (uuid) {
      setUuid(uuid)
    }
  }, [])

  const [updateTodo] = useMutation(ADD_TODO_MUTATION, {
    onCompleted: () => {
      clear()
      refetch()
    },
    onError: (error) => {
      console.error(error)
      setError(error.message)
    },
  })

  if (!isActiveNewTodo) return

  const handleAddTodo = () => {
    if (!title) {
      setError('titleは必須です')
      return
    }

    const timeDifference = getTimeDifference(contoryCd)
    const dueDateTimeGMT = dueDateTime
      ? subtractHoursFromDate(convertToGMT(dueDateTime), timeDifference)
      : ''
    updateTodo({ variables: { title, description, dueDateTimeGMT, uuid } })
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
        <TodoAddButton handler={handleAddTodo} />
      </div>
      {error && <ErrorMessage message={error} />}
    </div>
  )
}

export default NewTodo
