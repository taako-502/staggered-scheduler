import Footer from './Footer'
import Header from './Header'
import { ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import styles from './Layout.module.scss'
import { Analytics } from '@vercel/analytics/react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles['page-container']}>
      <Header />
      <main>
        <section className="max-w-screen-md mx-auto px-2 py-3 border-2 border-slate-300 border-solid">
          {children}
          <Analytics />
          <SpeedInsights />
        </section>
      </main>
      <Footer />
    </div>
  )
}
