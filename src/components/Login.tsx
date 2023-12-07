import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { User, isGraphQLUser } from '@/types/user.type'
import { UserContext } from '@/contexts/UserContext'
import { LOGIN_MUTATION } from '@/utilities/query.utility'
import { useMutation } from '@apollo/client'
import { isGqlErrorResponse } from '@/types/errors.type'
import ErrorMessage from './ErrorMessage'

type Props = {
  className: string
}

const Login = (props: Props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { setUser } = useContext(UserContext)

  const [signin, { loading }] = useMutation(LOGIN_MUTATION, {
    variables: { username, password },
    onCompleted: (data) => {
      const login = data.login
      console.log(login)
      if (isGraphQLUser(login)) {
        const user: User = login
        localStorage.setItem('uuid', user.id)
        setUser(user)
        router.push('/')
      } else if (isGqlErrorResponse(login)) {
        console.error('Login error:', login)
        setError(login.errors[0].message)
      } else {
        console.error('Login error:', login)
      }
    },
    onError: (error) => {
      setError(error.message)
    },
  })

  const handleSignup = async () => {
    try {
      await signin()
    } catch (error) {
      console.error('Login error:', error)
      setError(error)
    }
  }

  return (
    <div className={props.className}>
      <div className="mx-auto max-w-[320px]">
        <div>
          <h1>Login</h1>
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
        onClick={handleSignup}
        disabled={loading}
      >
        Login
      </button>
      <ErrorMessage message={error} />
    </div>
  )
}

export default Login
