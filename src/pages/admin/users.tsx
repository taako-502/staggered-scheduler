import ErrorMessage from '@/components/ErrorMessage'
import { User } from '@/types/user.type'
import { GET_USERS_QUERY, IS_ADMIN_QUERY } from '@/utilities/query.utility'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

// FIXME:　管理者ユーザーのみアクセスできるようにする
const Users = () => {
  const [error, setError] = useState<string>('')
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    setUuid(localStorage.getItem('uuid'))
  }, [])

  const { data: adminData } = useQuery(IS_ADMIN_QUERY, {
    variables: { id: uuid },
  })
  const { data: usersData, loading: loadingUsers } = useQuery(GET_USERS_QUERY)

  useEffect(() => {
    if (adminData && !adminData.userById.isAdmin) {
      setError('You are not admin user.')
    }
  }, [adminData])

  if (loadingUsers) return <div>Loading...</div>
  if (error) return <ErrorMessage message={error} />

  return (
    <div>
      {usersData.users.map((user: User) => (
        <div key={user.id}>
          <div>{user.username}</div>
        </div>
      ))}
    </div>
  )
}

export default Users
