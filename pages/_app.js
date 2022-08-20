import '../styles/globals.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Layout from '../component/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />{' '}
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default MyApp;
