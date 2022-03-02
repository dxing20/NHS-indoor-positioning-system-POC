require('../styles/antd.less');
import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname == "/login")
    return <Component {...pageProps} />

  else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
