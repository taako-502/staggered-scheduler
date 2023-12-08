import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { User, isGraphQLUser } from '@/types/user.type'
import { UserContext } from '@/contexts/UserContext'
import { LOGIN_MUTATION } from '@/utilities/mutation.utility'
import { useMutation } from '@apollo/client'
import { isGqlErrorResponse } from '@/types/errors.type'
import ErrorMessage from './ErrorMessage'
import PasswordText from './inputs/text/PasswordText'
import UsernameText from './inputs/text/UsernameText'
import LoginButton from './inputs/buttons/LoginButton'

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

  const handleSignin = async () => {
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
          <UsernameText username={username} setUsername={setUsername} />
        </div>
        <div className="mt-2">
          <PasswordText password={password} setPassword={setPassword} />
        </div>
      </div>
      <LoginButton handler={handleSignin} loading={loading} />
      <ErrorMessage message={error} />
    </div>
  )
}

export default Login
