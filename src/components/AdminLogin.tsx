import { useState } from 'react'
import { useRouter } from 'next/router'
import ErrorMessage from './ErrorMessage'
import { useMutation } from '@apollo/client'
import { ADMIN_LOGIN_MUTATION } from '@/utilities/query.utility'

type Props = {
  className: string
}

const AdminLogin: React.FC<Props> = ({ className }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const [signin, { loading }] = useMutation(ADMIN_LOGIN_MUTATION, {
    onCompleted: (data) => {
      const currentUuid = data.login.id
      localStorage.setItem('uuid', currentUuid)
      if (data.login.isAdmin) {
        router.push('/admin/users')
      } else {
        setError('You are not admin user.')
      }
    },
    onError: (apolloError) => {
      setError(apolloError.message)
    },
  })

  const handleSignin = async () => {
    try {
      await signin({ variables: { username, password } })
    } catch (err) {
      console.error(err)
      // エラーメッセージの設定
      setError(err.message)
    }
  }

  return (
    <div className={className}>
      <div className="mx-auto max-w-[320px]">
        <div>
          <h1>Admin Login</h1>
          <label
            htmlFor="username"
            className="mr-2 inline-block w-full max-w-[120px]"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="text-black px-2 py-1"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="password"
            className="mr-2 inline-block w-full max-w-[120px]"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="text-black px-2 py-1"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded block mx-auto mt-2"
        type="button"
        onClick={handleSignin}
        disabled={loading}
      >
        Login
      </button>
      <ErrorMessage message={error} />
    </div>
  )
}

export default AdminLogin
