import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>React avançado boilerplate</title>
        <link rel="shortcut icon" href="icon-512.png" />
        <link rel="apple-touch-icon" href="icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="boilerplate do curso react avançado com Willian Justen"
        ></meta>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
