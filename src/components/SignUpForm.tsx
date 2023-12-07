import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '@/contexts/UserContext'
import { User } from '@/types/user.type'
import { useMutation, gql } from '@apollo/client'

const SIGNUP_MUTATION = gql`
  mutation SignUp($username: String!, $password: String!) {
    createUser(input: { username: $username, password: $password }) {
      id
      username
    }
  }
`

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { setUser } = useContext(UserContext)

  const [signup, { loading }] = useMutation(SIGNUP_MUTATION, {
    variables: {
      username: name,
      password: password,
    },
    onCompleted: (data) => {
      const user: User = data.createUser
      localStorage.setItem('uuid', user.id)
      setUser(user)
      router.push('/')
    },
    onError: (error) => {
      setError(error.message)
    },
  })

  const handleSignup = async () => {
    try {
      await signup()
    } catch (error) {
      console.error('Signup error:', error)
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
        onClick={handleSignup}
        disabled={loading}
      >
        SingUp
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default SignUpForm
