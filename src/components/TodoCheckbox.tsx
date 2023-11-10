import useAxios from '@/hooks/useAxios'

type Props = {
  id: string
  status: 'CREATED' | 'COMPLETED'
}

const TodoCheckbox = (props: Props) => {
  const axios = useAxios()

  // TODO: 型をハードコーディングしない
  // FIXME: チェックボックスに関してはstatusではなくdoneを利用すること
  const updateStatus = async (id: string, status: 'CREATED' | 'COMPLETED') => {
    const newStatus = status === 'CREATED' ? 'COMPLETED' : 'CREATED'
    const query = `
    mutation {
      updateTodoStatus(id: "${id}", status: "${newStatus}") {
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
    <input
      type="checkbox"
      onChange={() => updateStatus(props.id, props.status)}
      checked={props.status === 'COMPLETED'}
    />
  )
}

export default TodoCheckbox
