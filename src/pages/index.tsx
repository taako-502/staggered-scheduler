import Login from '@/components/Login'
import useAxios from '@/hooks/useAxios'
import { signout } from '@/utility/signout'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [uuid, setUuid] = useState('')

  const axios = useAxios()
  useEffect(() => {
    const currentUuid = localStorage.getItem('uuid')
    if (currentUuid) {
      setUuid(currentUuid)
    }

    async function getUsers() {
      const query = `
        query users {
          users {
            id
            username
            createdAt
            updatedAt
          }
        }
      `
      try {
        const users = await axios.post('/query', { query })
      } catch (error) {
        console.error(error)
      }
    }
    getUsers()
  }, [])

  // ログインしていなければログイン画面へ遷移するためのリンクを設置
  if (!uuid) {
    return (
      <main>
        <Link href="/signin">SignIN</Link>
      </main>
    )
  }

  return (
    <main>
      <h1>Schedule List</h1>
      <button onClick={signout}>SignOut</button>
    </main>
  )
}
