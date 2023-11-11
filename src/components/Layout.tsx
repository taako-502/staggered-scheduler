import Header from './layout/Header'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto px-2 py-3 border-2 border-slate-300	border-solid">
        {children}
      </main>
    </>
  )
}
