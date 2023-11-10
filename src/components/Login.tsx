import { useState } from 'react'
import axios from 'axios'
import useAxios from '@/hooks/useAxios'
import { useRouter } from 'next/router'

type Props = {
  className: string
}

const Login = (props: Props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const axios = useAxios()
  const router = useRouter()

  const signin = async () => {
    try {
      const result = await axios.post('/query', {
        query: `
          mutation login {
            login(username: "${username}", password: "${password}") {
              id
            }
          }
        `,
        variables: {
          username,
          password,
        },
      })
      // エラーがあればエラーをセット
      if (
        result.data.errors &&
        result.data.errors[0].extensions &&
        result.data.errors[0].extensions.status
      ) {
        setError(
          `${result.data.errors[0].extensions.status}: ${result.data.errors[0].message}`,
        )
      } else {
        setError('')
        const currentUuid = result.data.data.login.id
        localStorage.setItem('uuid', currentUuid)
        router.push('/')
      }
    } catch {
      console.error(error)
      setError(error)
    }
  }

  return (
    <div className={props.className}>
      <div>
        <h1>Login</h1>
        <label htmlFor="username" className="mr-2">
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
        <label htmlFor="password" className="mr-2">
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded block mx-auto mt-2"
        type="button"
        onClick={signin}
      >
        Login
      </button>
      <p className="text-red-500">{error}</p>
    </div>
  )
}

export default Login
