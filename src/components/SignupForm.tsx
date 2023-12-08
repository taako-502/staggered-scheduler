import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '@/contexts/UserContext'
import { User } from '@/types/user.type'
import { useMutation } from '@apollo/client'
import { SIGNUP_MUTATION } from '@/utilities/mutation.utility'
import ErrorMessage from './ErrorMessage'
import UsernameText from './inputs/text/UsernameText'
import PasswordText from './inputs/text/PasswordText'
import SignupButton from './inputs/buttons/SignupButton'

const SignupForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { setUser } = useContext(UserContext)

  const [signup, { loading }] = useMutation(SIGNUP_MUTATION, {
    variables: { username: name, password: password },
    onCompleted: (data) => {
      const user: User = data.createUser
      localStorage.setItem('uuid', user.id)
      setUser(user)
      router.push('/')
    },
    onError: (error) => setError(error.message),
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
        <UsernameText username={name} setUsername={setName} />
      </div>
      <div className="mt-2">
        <PasswordText password={password} setPassword={setPassword} />
      </div>
      <SignupButton handler={handleSignup} loading={loading} />
      {error && <ErrorMessage message={error} />}
    </div>
  )
}

export default SignupForm
