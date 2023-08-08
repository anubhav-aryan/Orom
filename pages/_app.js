import Main from '@components/Main';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
    </>
  );
}

export default MyApp;