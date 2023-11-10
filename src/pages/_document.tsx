import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <section className="max-w-screen-md mx-auto px-2 py-3 border-2 border-slate-300	border-solid">
          <Main />
          <NextScript />
        </section>
      </body>
    </Html>
  )
}
