import { useState } from 'react'
import { useRouter } from 'next/router'
import ErrorMessage from './ErrorMessage'
import { useMutation } from '@apollo/client'
import { ADMIN_LOGIN_MUTATION } from '@/utilities/mutation.utility'
import PasswordText from './inputs/text/PasswordText'
import UsernameText from './inputs/text/UsernameText'
import LoginButton from './inputs/buttons/LoginButton'

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

export default AdminLogin
