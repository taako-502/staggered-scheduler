import Link from 'next/link'
import Image from 'next/image'
import { signout } from '@/utility/signout'
import { useEffect, useState } from 'react'
import useAxios from '@/hooks/useAxios'

const Header = () => {
  const [username, setUsername] = useState('')
  const axios = useAxios()

  useEffect(() => {
    const currentUuid = localStorage.getItem('uuid') ?? ''
    if (!currentUuid) return

    async function getUsername(uuid: string) {
      const query = `
      query {
        userById(id: "${uuid}") {
          username
        }
      }`
      try {
        const result = await axios.post('/query', { query })
        setUsername(result.data.data.userById.username)
      } catch (error) {
        console.error(error)
      }
    }
    getUsername(currentUuid)
  }, [])

  return (
    <div>
      <div className="max-w-screen-md mx-auto grid grid-cols-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width="300" height="30" />
        </Link>
        <div className="text-right">
          <span className="mr-4">{username}</span>
          <button onClick={signout} className="relative z-40">
            SignOut
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
