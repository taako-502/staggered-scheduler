import Login from '@/components/Login'
import Link from 'next/link'

const Signin = () => {
  return (
    <div>
      <Login className="block max-w-screen-sm	mx-auto px-2 py-3 border-2 border-slate-300	border-solid" />
      <Link
        href="/signup"
        className="block text-center text-slate-500 hover:text-slate-700"
      >
        Create an account
      </Link>
    </div>
  )
}

export default Signin
