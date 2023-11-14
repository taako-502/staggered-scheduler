import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import useAxios from '@/hooks/useAxios'
import { UserContext } from '@/contexts/UserContext'
import { User } from '@/types/user.type'

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const axios = useAxios()
  const router = useRouter()
  const { setUser } = useContext(UserContext)

  const signup = async () => {
    const query = `
      mutation {
        createUser(input: {
          username: "${name}",
          password: "${password}"
        }) {
          id
          username
        }
      }
    `

    try {
      const result = await axios.post('/query', { query })
      if (result.data.errors) {
        setError(result.data.errors[0].message)
        return
      }
      setError('')
      const user: User = result.data.data.createUser
      localStorage.setItem('uuid', user.id)
      setUser(user)
      router.push('/')
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <div className="mx-auto max-w-[320px]">
      <div className="mt-2">
        <label
          htmlFor="name"
          className="mr-2 inline-block w-full max-w-[120px]"
        >
          Username
        </label>
        <input
          id="name"
          type="text"
          className="text-slate-500"
          onChange={(e) => setName(e.target.value)}
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
          className="text-slate-500"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded block mx-auto mt-2"
        type="button"
        onClick={signup}
      >
        SingUp
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default SignUpForm