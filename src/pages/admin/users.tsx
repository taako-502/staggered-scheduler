import useAxios from '@/hooks/useAxios'
import { User } from '@/types/user.type'
import { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string>('')
  const axios = useAxios()

  useEffect(() => {
    async function fetchUsers() {
      // 管理者ユーザーかどうかを判定する
      const uuid = localStorage.getItem('uuid')
      const loginUser = await axios.post('/query', {
        query: `
          query {
            userById(id: "${uuid}") {
              id
              isAdmin
            }
          }
        `,
      })
      if (!loginUser.data.data.userById.isAdmin) {
        setError('You are not admin user.')
        return
      }
      // ユーザ情報の取得
      const result = await axios.post('/query', {
        query: `
          query {
            users {
              id
              username
            }
          }
        `,
      })
      setUsers(result.data.data.users)
    }
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {error && <div color="text-red-600">{error}</div>}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>{user.username}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Users
