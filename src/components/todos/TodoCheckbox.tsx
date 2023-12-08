import { UPDATE_TODO_DONE_MUTATION } from '@/utilities/mutation.utility'
import { useMutation } from '@apollo/client'

type Props = {
  id: string
  done: boolean
  setDone: (done: boolean) => void
}

const TodoCheckbox: React.FC<Props> = ({ id, done, setDone }) => {
  const [updateTodoDone, { error }] = useMutation(UPDATE_TODO_DONE_MUTATION, {
    onCompleted: (data) => {
      const done = data.updateTodoDone.done
      setDone(done)
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
