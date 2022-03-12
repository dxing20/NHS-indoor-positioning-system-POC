require('../styles/antd.less');
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router';
import RouteGuard from './api/routeguard.service';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname == "/login") {
    return (
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    )
  }


  else {
    return (
      <Layout>
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </Layout>
    )
  }
}

export default MyApp
