import useAxios from '@/hooks/useAxios'

type Props = {
  id: string
  done: boolean
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
      // FIXME:リロードしないようにすること
      window.location.reload()
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
