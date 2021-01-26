import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => {
  return (
    <Layout title="Shelf">
      <Link href="/addbook">Add Book</Link>
    </Layout>
  )
}
export default IndexPage
