import useAxios from '@/hooks/useAxios'
import { useEffect } from 'react'

export default function Home() {
  const query = `
    query users {
      users {
        id
        username
        passwordHash
        createdAt
        updatedAt
      }
    }
  `

  const axios = useAxios()
  useEffect(() => {
    axios
      .post('/query', {
        query,
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <main>Hello World</main>
}
