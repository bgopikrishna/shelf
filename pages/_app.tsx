import React from 'react'
import { CSSReset, ThemeProvider, theme } from '@chakra-ui/core'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
