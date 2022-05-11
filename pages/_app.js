import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from 'components/layout/layout';
import { AppWrapper } from 'context/state';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Reads</title>
      </Head>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </>
  )
}

export default MyApp
