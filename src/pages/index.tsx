import Login from '@/components/Login'
import useAxios from '@/hooks/useAxios'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
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

  const axios = useAxios()
  useEffect(() => {
    async function getUsers() {
      try {
        const users = await axios.post('/query', { query })
      } catch (error) {
        console.error(error)
      }
    }
    getUsers()
  }, [])

  return (
    <main>
      <Link href="/signin">SignIN</Link>
    </main>
  )
}
