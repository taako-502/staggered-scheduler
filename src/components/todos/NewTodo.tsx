import useAxios from '@/hooks/useAxios'
import { useEffect, useState } from 'react'

type Props = {
  isActiveNewTodo: boolean
}

const NewTodo = (props: Props) => {
  const [title, setTitle] = useState('')
  const [uuid, setUuid] = useState('')
  const axios = useAxios()

  useEffect(() => {
    const uuid = localStorage.getItem('uuid')
    if (uuid) {
      setUuid(uuid)
    }
  }, [])

  if (!props.isActiveNewTodo) return

  const newTodo = async () => {
    const query = `
      mutation {
        createTodo(input: {
          title: "${title}"
          description: ""
          dueDateTime: ""
          userId: "${uuid}"
        }) {
          id
        }
      }
    `
    try {
      await axios.post('/query', { query })
      window.location.reload()
    } catch {
      console.error('error')
    }
  }

  return (
    <div>
      <input
        id="new-todo-title"
        className="text-black px-2 py-1"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button id="new-todo-submit" type="submit" onClick={newTodo}>
        Add
      </button>
    </div>
  )
}

export default NewTodo
