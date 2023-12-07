import { TodoStatus as TodoStatusType } from '@/types/todo.type'
import { UPDATE_TODO_STATUS_MUTATION } from '@/utilities/mutation.utility'
import { useMutation } from '@apollo/client'
import ErrorMessage from '../ErrorMessage'

type Props = {
  id: string
  status: TodoStatusType
}

const TodoStatus: React.FC<Props> = ({ id, status }) => {
  const [updateStatus, { loading, error }] = useMutation(
    UPDATE_TODO_STATUS_MUTATION,
    {
      onCompleted: () => {
        // FIXME: リロードはやめたい
        window.location.reload()
      },
      onError: (error) => {
        console.log(error)
      },
    },
  )

  const handleChangeStatus = (newStatus: TodoStatusType) => {
    updateStatus({ variables: { id, status: newStatus } })
  }

  if (loading) return <p>Loading...</p>
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
