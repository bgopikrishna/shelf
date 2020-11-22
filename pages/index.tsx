import AddBook from '../components/AddBook/AddBook'
import Layout from '../components/Layout/Layout'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => {
  return (
    <Layout title="Shelf">
      <AddBook />
    </Layout>
  )
}
export default IndexPage
