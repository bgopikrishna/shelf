import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import BottomNavbar from './BottomNavbar'
import Button from '../Buttons/Button'
import useDarkMode from '../../hooks/useDarkMode'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { colorMode, toggleDarkMode } = useDarkMode()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Button onClick={toggleDarkMode}>{colorMode}</Button>
        <BottomNavbar />
      </header>
      {children}
    </div>
  )
}

export default Layout
