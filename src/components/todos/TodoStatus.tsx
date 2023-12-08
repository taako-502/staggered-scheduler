import { TodoStatus as TodoStatusType } from '@/types/todo.type'
import { UPDATE_TODO_STATUS_MUTATION } from '@/utilities/mutation.utility'
import { useMutation } from '@apollo/client'
import ErrorMessage from '../ErrorMessage'

type Props = {
  id: string
  status: TodoStatusType
  setStatus: (status: TodoStatusType) => void
}

const TodoStatus: React.FC<Props> = ({ id, status, setStatus }) => {
  const [updateStatus, { error }] = useMutation(UPDATE_TODO_STATUS_MUTATION, {
    onCompleted: (data) => {
      setStatus(data.updateTodoStatus.status)
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const handleChangeStatus = (newStatus: TodoStatusType) => {
    updateStatus({ variables: { id, status: newStatus } })
  }

  if (error) return <ErrorMessage message="Error updating status" />

  return (
    <select
      value={status}
      className="bg-black"
      onChange={(e) => handleChangeStatus(e.target.value as TodoStatusType)}
    >
      <option value="CREATED">CREATED</option>
      <option value="COMPLETED">COMPLETED</option>
    </select>
  )
}

export default TodoStatus
