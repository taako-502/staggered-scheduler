import useAxios from '@/hooks/useAxios'
import { useEffect, useState } from 'react'

type Props = {
  isActiveNewTodo: boolean
}

const NewTodo = (props: Props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDateTime, setDueDateTime] = useState('')
  const [uuid, setUuid] = useState('')
  const [error, setError] = useState('')
  const axios = useAxios()

  useEffect(() => {
    const uuid = localStorage.getItem('uuid')
    if (uuid) {
      setUuid(uuid)
    }
  }, [])

  if (!props.isActiveNewTodo) return

  const newTodo = async () => {
    if (!title || !dueDateTime) {
      setError('titleとdueDateTimeは必須です')
      return
    }
    const query = `
      mutation {
        createTodo(input: {
          title: "${title}"
          description: "${description}"
          dueDateTime: "${dueDateTime}"
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
      <div className="mt-4 flex">
        <label htmlFor="new-todo-title" className="block w-full max-w-[160px]">
          Title
        </label>
        <input
          id="new-todo-title"
          className="w-full text-black px-2 py-1"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-4 flex">
        <label
          htmlFor="new-todo-description"
          className="block w-full max-w-[160px]"
        >
          Description
        </label>
        <textarea
          id="new-todo-description"
          className="w-full text-black px-2 py-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mt-4 flex">
        <label
          htmlFor="new-todo-due-date-time"
          className="block w-full max-w-[160px]"
        >
          Due Date Time
        </label>
        <input
          id="new-todo-due-date-time"
          type="datetime-local"
          className="w-full text-black px-2 py-1"
          value={dueDateTime}
          onChange={(e) => setDueDateTime(e.target.value)}
        />
      </div>
      <div className="text-right">
        <button
          id="new-todo-submit"
          className="px-2 py-[2px] mt-2 border-2 border-slate-300	border-dotted"
          type="submit"
          onClick={newTodo}
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default NewTodo
