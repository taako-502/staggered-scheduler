import Link from 'next/link'
import AdminLogin from '@/components/AdminLogin'

const Admin = () => {
  return (
    <div>
      <AdminLogin className="block max-w-screen-sm mx-auto px-2 py-3 border-2 border-slate-300 border-solid" />
      <div className="text-center mt-2">
        <Link
          href="/"
          className="px-2 py-1 border-dotted border-2 border-slate-300"
        >
          Top Page
        </Link>
      </div>
    </div>
  )
}

export default Admin
