import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import './../styles/globals.scss'
import Layout from '@/components/layout/Layout'
import { UserProvider } from '@/contexts/UserContext'
import { ApolloProvider } from '@apollo/client'
import useApollo from '@/hooks/useApollo'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = useApollo()
  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ApolloProvider>
  )
}
