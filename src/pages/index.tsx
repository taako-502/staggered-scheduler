import Introduction from '@/components/Introduction'
import TodoList from '@/components/todos/TodoList'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [uuid, setUuid] = useState('')
  const [isActiveNewTodo, setIsActiveNewTodo] = useState(false)

  useEffect(() => {
    const currentUuid = localStorage.getItem('uuid')
    if (currentUuid) {
      setUuid(currentUuid)
    } else {
      return
    }
  }, [])

  // ログインしていなければログイン画面へ遷移するためのリンクを設置
  if (!uuid) return <Introduction />

  return (
    <main>
      <TodoList
        isActiveNewTodo={isActiveNewTodo}
        setIsActiveNewTodo={setIsActiveNewTodo}
      />
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
