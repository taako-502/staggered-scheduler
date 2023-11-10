import TodoList from '@/components/todos/TodoList'
import useAxios from '@/hooks/useAxios'
import { signout } from '@/utility/signout'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [uuid, setUuid] = useState('')
  const [isActiveNewTodo, setIsActiveNewTodo] = useState(false)

  const axios = useAxios()
  useEffect(() => {
    const currentUuid = localStorage.getItem('uuid')
    if (currentUuid) {
      setUuid(currentUuid)
    } else {
      return
    }
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
      <TodoList isActiveNewTodo={isActiveNewTodo} />
      <button
        onClick={() => {
          setIsActiveNewTodo(!isActiveNewTodo)
        }}
      >
        New Schedule
      </button>
    </main>
  )
}
