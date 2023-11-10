import Link from 'next/link'
import Image from 'next/image'
import { signout } from '@/utility/signout'

const Header = () => {
  return (
    <div>
      <div className="max-w-screen-md mx-auto grid grid-cols-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width="300" height="30" />
        </Link>
        <div className="text-right">
          <button onClick={signout} className="relative z-40">
            SignOut
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
