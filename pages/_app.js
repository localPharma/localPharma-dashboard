import Context from '../src/Components/Context'
import Layout from '../src/Components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  )
}

export default MyApp
