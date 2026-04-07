import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "leaflet/dist/leaflet.css";
import { AppProvider } from '../context/AppContext';
import ScrollObserver from '../components/scroll-observer';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ScrollObserver />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
