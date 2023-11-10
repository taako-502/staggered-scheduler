import useAxios from '@/hooks/useAxios'
import { TodoStatus } from '@/types/todo.type'

type Props = {
  id: string
  status: TodoStatus
}
const TodoStatus = (props: Props) => {
  const axios = useAxios()

  const updateStatus = async (id: string, status: TodoStatus) => {
    const query = `
    mutation {
      updateTodoStatus(id: "${id}", status: "${status}") {
        id
      }
    }
  `
    try {
      await axios.post('/query', { query })
      window.location.reload()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <select
      value={props.status}
      className="bg-black"
      onChange={(e) => updateStatus(props.id, e.target.value as TodoStatus)}
    >
      <option value="CREATED">CREATED</option>
      <option value="COMPLETED">COMPLETED</option>
    </select>
  )
}

export default TodoStatus
