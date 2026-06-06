import Head from "next/head";
import Header from "../components/detail-header";
import ZoomModal from "../components/zoom-modal";
import StickyButtons from "../components/sticky-buttons";
import Footer from "../components/footer";
import { useState, useCallback } from "react";
import { useApp } from "../context/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";

const images = [
  "/lotus/hero/lotus-hero.webp",
  "/lotus/outside/lotus-outside-1.webp",
  "/lotus/outside/lotus-outside-2.webp",
  "/lotus/outside/lotus-outside-3.webp",
];

export default function PostacilarLotus() {
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { t } = useApp();

  const handleNextStart = useCallback((swiper) => {
    swiper.slides.forEach(s => s.classList.remove("slide-entering"));
    const enterSlide = swiper.slides[swiper.activeIndex + 1];
    if (enterSlide) enterSlide.classList.add("slide-entering");
  }, []);

  const handleTransitionEnd = useCallback((swiper) => {
    swiper.slides.forEach(s => s.classList.remove("slide-entering"));
  }, []);

  const openModal = (index) => {
    setModalImages(images);
    setModalIndex(index);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <ZoomModal
          images={modalImages}
          startIndex={modalIndex}
          onClose={() => setShowModal(false)}
        />
      )}
      <Head>
        <title>Postacılar Lotus | Çanakkale Yeşil Yaşam Konut Projesi</title>
        <meta name="description" content="Postacılar Lotus — Çanakkale'de huzurlu ve yeşil bir yaşam sunan konut projesi. Doğayla uyumlu tasarım, ferah yaşam alanları, kaliteli yapı. Proje detayları için inceleyin." />
        <meta name="keywords" content="Postacılar Lotus, Çanakkale Lotus konut projesi, yeşil yaşam Çanakkale, Lotus daire, huzurlu konut Çanakkale, Postacılar Yapı Lotus, Çanakkale satılık daire" />
        <meta name="author" content="Postacılar Yapı" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="TR-17" />
        <meta name="geo.placename" content="Çanakkale" />
        <link rel="canonical" href="https://www.postacilar.com/postacilar-lotus" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="Postacılar Lotus | Çanakkale Yeşil Yaşam Konut Projesi" />
        <meta property="og:description" content="Postacılar Lotus — Çanakkale'de huzurlu ve yeşil bir yaşam sunan konut projesi. Doğayla uyumlu tasarım, ferah yaşam alanları, kaliteli yapı." />
        <meta property="og:url" content="https://www.postacilar.com/postacilar-lotus" />
        <meta property="og:image" content="https://www.postacilar.com/lotus/outside/lotus-outside-1.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Postacılar Lotus — Çanakkale yeşil yaşam konut projesi" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Postacılar Lotus | Çanakkale Yeşil Yaşam Konut Projesi" />
        <meta name="twitter:description" content="Postacılar Lotus — Çanakkale'de huzurlu ve yeşil bir yaşam sunan konut projesi. Proje detayları ve görseller için inceleyin." />
        <meta name="twitter:image" content="https://www.postacilar.com/lotus/outside/lotus-outside-1.webp" />
        <meta name="twitter:image:alt" content="Postacılar Lotus Çanakkale yeşil yaşam konut projesi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            "name": "Postacılar Lotus",
            "url": "https://www.postacilar.com/postacilar-lotus",
            "image": "https://www.postacilar.com/lotus/outside/lotus-outside-1.webp",
            "description": "Postacılar Lotus — Çanakkale'de huzurlu ve yeşil bir yaşam sunan konut projesi.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Çanakkale",
              "addressCountry": "TR"
            }
          }) }}
        />
      </Head>
      <Header />
      <main>
      <div className="detail-hero">
        <img src="/lotus/hero/lotus-hero.webp" className="detail-hero-bg" alt="Postacılar Lotus projesi dış cephe görünümü" />
        <div className="detail-hero-title">
          <div className="detail-title">
            <img src="/postacilar-logo.png" className="hero-postacilar-logo" alt="Postacılar Yapı logosu" /> <span className="detail-title-stick">|</span> <span className="detail-title-name" style={{marginRight: '-5px'}}>LOTUS</span>
          </div>
        </div>
      </div>

      <div className="container-fluid detail-container">


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              LOTUS <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.about')}</span>
            </div>
            <div className="detail-paragraph">{t('details.lotus.about')}</div>
          </div>
        </div>


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              LOTUS <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.projectDetails')}</span>
            </div>
            <div className="detail-paragraph" dangerouslySetInnerHTML={{ __html: t('details.lotus.details').replace(/\n/g, '<br/>') }} />
          </div>
        </div>


        <div className="life-interior-section">
          <div className="detail-sub-title">
            LOTUS <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.visuals')}</span>
          </div>
          <div className="detail-swiper-mobile">
            <Swiper modules={[Navigation, Autoplay]} navigation loop={true} autoplay={{ delay: 2800, disableOnInteraction: false }} speed={800} spaceBetween={8} slidesPerView={1} onSlideNextTransitionStart={handleNextStart} onTransitionEnd={handleTransitionEnd}>
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img onClick={() => openModal(i)} src={src} alt={`Postacılar Lotus görsel ${i + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="detail-mosaic-desktop images zoomable-img">
            <div className="row align-items-end g-4">
              <div className="col-3">
                <img onClick={() => openModal(0)} width="100%" height="auto" src="/lotus/outside/lotus-outside-1.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Lotus dış cephe 1" />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(1)} width="100%" height="auto" src="/lotus/outside/lotus-outside-2.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Lotus dış cephe 2" />
              </div>
              <div className="col-4">
                <img onClick={() => openModal(2)} width="100%" height="auto" src="/lotus/outside/lotus-outside-3.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Lotus dış cephe 3" />
              </div>
            </div>
          </div>
        </div>

      </div>
      </main>
      <Footer />
      <StickyButtons />
    </>
  );
}
