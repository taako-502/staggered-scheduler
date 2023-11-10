import TodoList from '@/components/TodoList'
import useAxios from '@/hooks/useAxios'
import { Todo } from '@/types/todo.type'
import { signout } from '@/utility/signout'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [uuid, setUuid] = useState('')

  const axios = useAxios()
  useEffect(() => {
    const currentUuid = localStorage.getItem('uuid')
    if (currentUuid) {
      setUuid(currentUuid)
    } else {
      return
    }

    async function getTodosByUserId() {
      const query = `
        query {
          todosByUserId(userID: "${currentUuid}"){
            id
            title
            description
            done
            dueDateTime
            status
            createdAt
            updatedAt
          }
        }
      `
      try {
        const result = await axios.post('/query', { query })
        setTodos(result.data.data.todosByUserId)
      } catch (error) {
        console.error(error)
      }
    }
    getTodosByUserId()
  }, [])

  // ログインしていなければログイン画面へ遷移するためのリンクを設置
  if (!uuid) {
    return (
      <main>
        <Link href="/signin">SignIn</Link>
      </main>
    )
  }

  return (
    <main>
      <h1>Schedule List</h1>
      <button onClick={signout}>SignOut</button>
      <TodoList todos={todos} />
    </main>
  )
}
