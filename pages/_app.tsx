/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { SearchContextProvider } from '../context/SearchContext'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </ChakraProvider>
  )
}

export default App
