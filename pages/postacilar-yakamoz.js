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
  "/yakamoz/hero/yakamoz-hero.webp",
  "/yakamoz/outside/yakamoz-outside-1.webp",
  "/yakamoz/outside/yakamoz-outside-2.webp",
  "/yakamoz/outside/yakamoz-outside-3.webp",
  "/yakamoz/outside/yakamoz-outside-4.webp",
  "/yakamoz/outside/yakamoz-outside-5.webp",
];

export default function PostacilarYakamoz() {
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
        <title>Postacılar Yakamoz | Barbaros Mahallesi Çanakkale Boğaz Manzaralı Satılık Daire</title>
        <meta name="description" content="Postacılar Yakamoz — Çanakkale Barbaros Mahallesi, 100. Yıl Caddesi'nde yeni kordon cepheli, Boğaz manzaralı konut projesi. 3+1 ve 4+1 dubleks satılık daire seçenekleri. Postacılar Yapı." />
        <meta name="keywords" content="Postacılar Yakamoz, barbaros mahallesi satılık daire, çanakkale boğaz manzaralı daire, çanakkale deniz manzaralı daire, çanakkale yeni kordon daire, 100 yıl caddesi daire, çanakkale 3+1 satılık, çanakkale 4+1 dubleks, Postacılar Yapı Yakamoz, çanakkale satılık daire" />
        <meta name="author" content="Postacılar Yapı" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="TR-17" />
        <meta name="geo.placename" content="Çanakkale" />
        <link rel="canonical" href="https://www.postacilar.com/postacilar-yakamoz" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="Postacılar Yakamoz | Çanakkale Doğa İçinde Yaşam Projesi" />
        <meta property="og:description" content="Postacılar Yakamoz — Çanakkale'de doğayla iç içe, huzurlu bir yaşam sunan konut projesi. Yeşil çevre, ferah yaşam alanları ve kaliteli mimari." />
        <meta property="og:url" content="https://www.postacilar.com/postacilar-yakamoz" />
        <meta property="og:image" content="https://www.postacilar.com/yakamoz/outside/yakamoz-outside-1.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Postacılar Yakamoz — Çanakkale doğa içinde konut projesi" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Postacılar Yakamoz | Çanakkale Doğa İçinde Yaşam Projesi" />
        <meta name="twitter:description" content="Postacılar Yakamoz — Çanakkale'de doğayla iç içe, huzurlu bir yaşam sunan konut projesi. Proje detayları ve görseller için inceleyin." />
        <meta name="twitter:image" content="https://www.postacilar.com/yakamoz/outside/yakamoz-outside-1.webp" />
        <meta name="twitter:image:alt" content="Postacılar Yakamoz Çanakkale doğa içinde konut" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            "name": "Postacılar Yakamoz",
            "url": "https://www.postacilar.com/postacilar-yakamoz",
            "image": "https://www.postacilar.com/yakamoz/outside/yakamoz-outside-1.webp",
            "description": "Çanakkale Barbaros Mahallesi, 100. Yıl Caddesi'nde yeni kordon cepheli, Boğaz manzaralı konut projesi. 3+1 ve 4+1 dubleks daire seçenekleri.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Barbaros Mahallesi, 100. Yıl Caddesi",
              "addressLocality": "Çanakkale",
              "addressCountry": "TR"
            }
          }) }}
        />
      </Head>
      <Header />
      <main>
      <div className="detail-hero">
        <img src="/yakamoz/hero/yakamoz-hero.webp" className="detail-hero-bg" alt="Postacılar Yakamoz projesi dış cephe görünümü" />
        <div className="detail-hero-title">
          <div className="detail-title">
            <img src="/postacilar-logo.png" className="hero-postacilar-logo" alt="Postacılar Yapı logosu" /> <span className="detail-title-stick">|</span> <span className="detail-title-name" style={{marginRight: '-5px'}}>YAKAMOZ</span>
          </div>
        </div>
      </div>

      <div className="container-fluid detail-container">


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              YAKAMOZ <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.about')}</span>
            </div>
            <div className="detail-paragraph">{t('details.yakamoz.about')}</div>
          </div>
        </div>


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              YAKAMOZ <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.projectDetails')}</span>
            </div>
            <div className="detail-paragraph" dangerouslySetInnerHTML={{ __html: t('details.yakamoz.details').replace(/\n/g, '<br/>') }} />
          </div>
        </div>


        <div className="life-interior-section">
          <div className="detail-sub-title">
            YAKAMOZ <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.visuals')}</span>
          </div>
          <div className="detail-swiper-mobile">
            <Swiper modules={[Navigation, Autoplay]} navigation loop={true} autoplay={{ delay: 2800, disableOnInteraction: false }} speed={800} spaceBetween={8} slidesPerView={1} onSlideNextTransitionStart={handleNextStart} onTransitionEnd={handleTransitionEnd}>
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img onClick={() => openModal(i)} src={src} alt={`Postacılar Yakamoz görsel ${i + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="detail-mosaic-desktop images zoomable-img">
            <div className="row align-items-end g-4">
              <div className="col-3">
                <img onClick={() => openModal(0)} width="100%" height="auto" src="/yakamoz/outside/yakamoz-outside-1.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Yakamoz dış cephe 1" />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(1)} width="100%" height="auto" src="/yakamoz/outside/yakamoz-outside-2.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Yakamoz dış cephe 2" />
              </div>
              <div className="col-4">
                <img onClick={() => openModal(2)} width="100%" height="auto" src="/yakamoz/outside/yakamoz-outside-3.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Yakamoz dış cephe 3" />
              </div>
            </div>
            <div className="row g-4 mt-3">
              <div className="col-7">
                <img onClick={() => openModal(3)} width="100%" height="auto" src="/yakamoz/outside/yakamoz-outside-4.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Yakamoz dış cephe 4" />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(4)} width="100%" height="auto" src="/yakamoz/outside/yakamoz-outside-5.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Yakamoz dış cephe 5" />
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
