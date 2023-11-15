import { Analytics } from '@vercel/analytics/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="py-14">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
