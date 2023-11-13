import useAxios from '@/hooks/useAxios'

type Props = {
  id: string
  done: boolean
  updateTodoInList: (uuid: string) => {}
}

const TodoCheckbox = (props: Props) => {
  const axios = useAxios()
  const updateDone = async (id: string, done: boolean) => {
    const query = `
      mutation {
        updateTodoDone(id: "${id}", done: ${!done}) {
          id
          done
        }
      }
    `
    try {
      await axios.post('/query', { query })
      props.updateTodoInList(id)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <input
      type="checkbox"
      checked={props.done}
      onChange={() => updateDone(props.id, props.done)}
    />
  )
}

export default TodoCheckbox
