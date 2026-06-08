import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import Head from 'next/head';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "leaflet/dist/leaflet.css";
import { AppProvider } from '../context/AppContext';
import ScrollObserver from '../components/scroll-observer';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ScrollObserver />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
