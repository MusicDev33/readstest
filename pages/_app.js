import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from 'components/Layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
