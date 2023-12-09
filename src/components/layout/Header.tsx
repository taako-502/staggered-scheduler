import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/contexts/UserContext'
import { GET_USER_BY_ID_QUERY } from '@/utilities/query.utility'
import ErrorMessage from '../ErrorMessage'
import { User } from '@/types/user.type'
import { useRouter } from 'next/router'

const Header = () => {
  const { user, setUser } = useContext(UserContext)
  const [uuid, setUuid] = useState('')
  const route = useRouter()

  useEffect(() => {
    setUuid(localStorage.getItem('uuid') ?? '')
    if (uuid) {
      setUser({ ...user, id: uuid })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uuid])

  const { data, loading, error } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: user?.id },
    skip: !user?.id, // クエリをスキップする条件
    onCompleted: (data) => {
      const user: User = {
        username: data.userById.username,
      }
      setUser(user)
    },
    onError: (error) => {
      console.error('header', error)
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage message="Error loading user" />

  const signout = () => {
    localStorage.removeItem('uuid')
    route.push('/')
    window.location.reload()
  }

  return (
    <header className="pt-12">
      <div className="max-w-screen-md mx-auto grid grid-cols-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={300} height={30} priority />
        </Link>
        <div className="text-right pt-3">
          <span className="mr-4">{user.username}</span>
          <button onClick={signout} className="relative z-40">
            SignOut
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
