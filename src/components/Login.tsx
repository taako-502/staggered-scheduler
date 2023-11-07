import { useState } from 'react'
import axios from 'axios'
import useAxios from '@/hooks/useAxios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const axios = useAxios()

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
      }
    } catch {
      console.error(error)
      setError(error)
    }
  }

  return (
    <div>
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
      <div>
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
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
