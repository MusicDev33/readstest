import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from 'components/layout/layout';
import { AppWrapper } from 'context/state';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}

export default MyApp
