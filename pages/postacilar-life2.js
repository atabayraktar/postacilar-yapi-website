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

const exteriorImages = [
  "/life2/hero/life2-hero.webp",
  "/life2/outside/life2-outside-1.webp","/life2/outside/life2-outside-2.webp",
  "/life2/outside/life2-outside-3.webp","/life2/outside/life2-outside-4.webp",
  "/life2/outside/life2-outside-5.webp","/life2/outside/life2-outside-6.webp",
  "/life2/outside/life2-outside-7.webp",
];

const interiorImages = [
  "/life2/inside/life2-inside-1.webp","/life2/inside/life2-inside-2.webp",
  "/life2/inside/life2-inside-3.webp","/life2/inside/life2-inside-4.webp",
  "/life2/inside/life2-inside-5.webp","/life2/inside/life2-inside-6.webp",
  "/life2/inside/life2-inside-7.webp","/life2/inside/life2-inside-8.webp",
  "/life2/inside/life2-inside-9.webp","/life2/inside/life2-inside-10.webp",
  "/life2/inside/life2-inside-11.webp","/life2/inside/life2-inside-12.webp",
  "/life2/inside/life2-inside-13.webp","/life2/inside/life2-inside-14.webp",
  "/life2/inside/life2-inside-15.webp",
];

const floorImages = [
  "/life2/flats/life2-flats-1.webp",
  "/life2/flats/life2-flats-2.webp",
  "/life2/flats/life2-flats-3.webp",
];

export default function PostacilarLife2() {
  const catalogUrl = null;
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { t } = useApp();
  const openModal = (images, index) => {
    setModalImages(images);
    setModalIndex(index);
    setShowModal(true);
  };

  const handleNextStart = useCallback((swiper) => {
    swiper.slides.forEach(s => s.classList.remove("slide-entering"));
    const perView = typeof swiper.params.slidesPerView === "number" ? swiper.params.slidesPerView : 4;
    const enterSlide = swiper.slides[swiper.activeIndex + perView];
    if (enterSlide) enterSlide.classList.add("slide-entering");
  }, []);

  const handleTransitionEnd = useCallback((swiper) => {
    swiper.slides.forEach(s => s.classList.remove("slide-entering"));
  }, []);

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
        <title>Postacılar Life 2 | Esenler Mahallesi Çanakkale Satılık 2+1 3+1 Daire</title>
        <meta name="description" content="Postacılar Life 2 — Çanakkale Esenler Mahallesi, Gazi Meclis Caddesi'nde 42 daireli sıfır konut projesi. 2+1 ve 3+1 satılık daire seçenekleri, park manzarası, kapalı otopark. Postacılar Yapı." />
        <meta name="keywords" content="Postacılar Life 2, esenler mahallesi satılık daire, çanakkale 2+1 satılık daire, çanakkale 3+1 satılık daire, gazi meclis caddesi daire, çanakkale sıfır daire, Çanakkale satılık daire, modern konut Çanakkale, Postacılar Yapı Life 2, çanakkale merkez konut" />
        <meta name="author" content="Postacılar Yapı" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="TR-17" />
        <meta name="geo.placename" content="Çanakkale" />
        <link rel="canonical" href="https://www.postacilar.com/postacilar-life2" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="Postacılar Life 2 | Çanakkale Satılık Daire Konut Projesi" />
        <meta property="og:description" content="Postacılar Life 2 — Çanakkale'de satışı devam eden modern konut projesi. Dış cephe görselleri, iç mekan tasarımı ve daire tipleri için inceleyin." />
        <meta property="og:url" content="https://www.postacilar.com/postacilar-life2" />
        <meta property="og:image" content="https://www.postacilar.com/life2/outside/life2-outside-1.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Postacılar Life 2 — Çanakkale modern konut projesi dış cephe" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Postacılar Life 2 | Çanakkale Satılık Daire Konut Projesi" />
        <meta name="twitter:description" content="Postacılar Life 2 — Çanakkale'de satışı devam eden modern konut projesi. Dış cephe görselleri, iç mekan tasarımı ve daire tipleri için inceleyin." />
        <meta name="twitter:image" content="https://www.postacilar.com/life2/outside/life2-outside-1.webp" />
        <meta name="twitter:image:alt" content="Postacılar Life 2 Çanakkale konut projesi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            "name": "Postacılar Life 2",
            "url": "https://www.postacilar.com/postacilar-life2",
            "image": "https://www.postacilar.com/life2/outside/life2-outside-1.webp",
            "description": "Çanakkale Esenler Mahallesi'nde 42 daireli, 2+1 ve 3+1 sıfır konut projesi. Gazi Meclis Caddesi, park manzarası, kapalı otopark.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Esenler Mahallesi, Gazi Meclis Caddesi No: 12",
              "addressLocality": "Çanakkale",
              "addressRegion": "Merkez",
              "addressCountry": "TR"
            }
          }) }}
        />
      </Head>
      <Header />
      <main>
      <div className="detail-hero">
        <img src="/life2/hero/life2-hero.webp" className="detail-hero-bg" alt="Postacılar Life 2 projesi dış cephe görünümü" />
        <div className="detail-hero-logo">
          <img src="/life2/postacilar-life2-logo.webp" alt="Postacılar Life 2 logosu" />
        </div>
      </div>

      <div className="container-fluid detail-container">


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life2/life2-logo.webp" alt="Life 2 logosu" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              <span className="detail-accent">{t('details.sections.about')}</span>
            </div>
            <div className="detail-paragraph">{t('details.life2.about')}</div>
          </div>
        </div>


        <div className="row life-details-row">
          <div className="col-12 col-md-6 life-details-col">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life2/life2-logo.webp" alt="Life 2 logosu" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              <span className="detail-accent">{t('details.sections.projectDetails')}</span>
            </div>
            <div className="detail-paragraph" dangerouslySetInnerHTML={{ __html: t('details.life2.details').replace(/\n/g, '<br/>') }} />
            {catalogUrl && (
              <a href={catalogUrl} target="_blank" rel="noopener noreferrer" className="catalog-btn">
                {t('details.sections.viewCatalog')}
              </a>
            )}
          </div>
          <div className="col-12 col-md-6 life-floor-col">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life2/life2-logo.webp" alt="Life 2 logosu" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              <span className="detail-accent">{t('details.sections.flatTypes')}</span>
            </div>
            <div className="detail-swiper-mobile flat-types-swiper">
              <Swiper modules={[Navigation, Autoplay]} navigation loop={true} autoplay={{ delay: 2800, disableOnInteraction: false }} speed={800} spaceBetween={8} slidesPerView={1}>
                {floorImages.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img onClick={() => openModal(floorImages, i)} src={src} style={{cursor:"zoom-in"}} alt={`Life 2 daire tipi ${i + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flat-types-inline flat-types-desktop">
              <div className="flat-inline-item">
                <img onClick={() => openModal(floorImages, 0)} src="/life2/flats/life2-flats-1.webp" style={{cursor:"zoom-in"}} alt="Life 2 daire tipi 1" />
              </div>
              <div className="flat-inline-item">
                <img onClick={() => openModal(floorImages, 1)} src="/life2/flats/life2-flats-2.webp" style={{cursor:"zoom-in"}} alt="Life 2 daire tipi 2" />
              </div>
              <div className="flat-inline-item">
                <img onClick={() => openModal(floorImages, 2)} src="/life2/flats/life2-flats-3.webp" style={{cursor:"zoom-in"}} alt="Life 2 daire tipi 3" />
              </div>
            </div>
          </div>
        </div>


        <div className="life-exterior-section">
          <div className="detail-sub-title">
            <div className="detail-title">
              <div className="prestige-logo"><img src="/life2/life2-logo.webp" alt="Life 2 logosu" /></div>
            </div>
            <span className="detail-sub-title-stick"><div>|</div></span>
            <span className="detail-accent">{t('details.sections.visuals')}</span>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            speed={800}
            spaceBetween={6}
            slidesPerView={4}
            breakpoints={{
              0:   { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 4 },
            }}
            onSlideNextTransitionStart={handleNextStart}
            onTransitionEnd={handleTransitionEnd}
          >
            {exteriorImages.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  onClick={() => openModal(exteriorImages, i)}
                  src={src}
                  className="swiper-exterior-img"
                  alt={`Postacılar Life 2 dış cephe ${i + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        <div className="life-interior-section">
          <div className="detail-sub-title">
            <div className="detail-title">
              <div className="prestige-logo"><img src="/life2/life2-logo.webp" alt="Life 2 logosu" /></div>
            </div>
            <span className="detail-sub-title-stick"><div>|</div></span>
            <span className="detail-accent">{t('details.sections.interiorDesign')}</span>
          </div>
          <div className="detail-swiper-mobile">
            <Swiper modules={[Navigation, Autoplay]} navigation loop={true} autoplay={{ delay: 2800, disableOnInteraction: false }} speed={800} spaceBetween={8} slidesPerView={1} onSlideNextTransitionStart={handleNextStart} onTransitionEnd={handleTransitionEnd}>
              {interiorImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <img onClick={() => openModal(interiorImages, i)} src={src} alt={`Postacılar Life 2 iç mekan ${i + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="detail-mosaic-desktop images zoomable-img">

            <div className="interior-group">
              <div className="row align-items-end g-4">
                <div className="col-4">
                  <img onClick={() => openModal(interiorImages, 0)} src="/life2/inside/life2-inside-1.webp" className="interior-mosaic-img" loading="lazy" decoding="async" alt="Postacılar Life 2 iç mekan 1" />
                </div>
                <div className="col-3">
                  <img onClick={() => openModal(interiorImages, 1)} src="/life2/inside/life2-inside-2.webp" className="interior-mosaic-img" loading="lazy" decoding="async" alt="Postacılar Life 2 iç mekan 2" />
                </div>
                <div className="col-5">
                  <img onClick={() => openModal(interiorImages, 2)} src="/life2/inside/life2-inside-3.webp" className="interior-mosaic-img" loading="lazy" decoding="async" alt="Postacılar Life 2 iç mekan 3" />
                </div>
              </div>
              <div className="row g-4 mt-3">
                <div className="col-3">
                  <img onClick={() => openModal(interiorImages, 3)} src="/life2/inside/life2-inside-4.webp" className="interior-mosaic-img" loading="lazy" decoding="async" alt="Postacılar Life 2 iç mekan 4" />
                </div>
                <div className="col-5">
                  <img onClick={() => openModal(interiorImages, 4)} src="/life2/inside/life2-inside-5.webp" className="interior-mosaic-img" loading="lazy" decoding="async" alt="Postacılar Life 2 iç mekan 5" />
                </div>
                <div className="col-4">
                  <img onClick={() => openModal(interiorImages, 5)} src="/life2/inside/life2-inside-6.webp" className="interior-mosaic-img" loading="lazy" decoding="async" alt="Postacılar Life 2 iç mekan 6" />
                </div>
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
