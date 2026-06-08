import { useEffect } from 'react';
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
  useEffect(() => {
    let lenis;
    import('lenis').then(({ default: Lenis }) => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        smoothTouch: isMobile,
        touchMultiplier: isMobile ? 2.5 : 2,
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });
    return () => lenis?.destroy();
  }, []);

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
