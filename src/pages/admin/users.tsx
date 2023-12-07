import { User } from '@/types/user.type'
import { GET_USERS_QUERY, IS_ADMIN_QUERY } from '@/utilities/query.utility'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

const Users = () => {
  const [error, setError] = useState<string>('')
  const { data: adminData } = useQuery(IS_ADMIN_QUERY, {
    variables: { id: localStorage.getItem('uuid') },
  })
  const { data: usersData, loading: loadingUsers } = useQuery(GET_USERS_QUERY)

  useEffect(() => {
    if (adminData && !adminData.userById.isAdmin) {
      setError('You are not admin user.')
    }
  }, [adminData])

  if (loadingUsers) return <div>Loading...</div>
  if (error) return <div color="text-red-600">{error}</div>

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
