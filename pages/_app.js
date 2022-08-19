import '../styles/globals.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Layout from '../component/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />{' '}
    </Layout>
  );
}

export default MyApp;
