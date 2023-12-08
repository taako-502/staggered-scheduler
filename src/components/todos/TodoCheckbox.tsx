import { UPDATE_TODO_DONE_MUTATION } from '@/utilities/mutation.utility'
import { useMutation } from '@apollo/client'

type Props = {
  id: string
  done: boolean
  updateTodoInList: (uuid: string) => {}
}

const TodoCheckbox: React.FC<Props> = ({ id, done, updateTodoInList }) => {
  const [updateTodoDone, { error }] = useMutation(UPDATE_TODO_DONE_MUTATION, {
    onCompleted: (data) => {
      // FIXME: おそらく正常に動作していない
      updateTodoInList(id)
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const handleChangeDone = () => {
    updateTodoDone({ variables: { id, done: !done } })
  }

  return <input type="checkbox" checked={done} onChange={handleChangeDone} />
}

export default TodoCheckbox
