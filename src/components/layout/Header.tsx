import Link from 'next/link'
import Image from 'next/image'
import { signout } from '@/utilities/signout.utility'
import { useContext, useEffect } from 'react'
import { UserContext } from '@/contexts/UserContext'
import useAxios from '@/hooks/useAxios'

const Header = () => {
  const { user, setUser } = useContext(UserContext)
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
        const user = result.data.data.userById
        setUser(user)
      } catch (error) {
        console.error(error)
      }
    }
    getUsername(currentUuid)
  })

  return (
    <div>
      <div className="max-w-screen-md mx-auto grid grid-cols-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width="300" height="30" />
        </Link>
        <div className="text-right">
          <span className="mr-4">{user.username}</span>
          <button onClick={signout} className="relative z-40">
            SignOut
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
