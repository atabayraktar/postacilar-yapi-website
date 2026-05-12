import Head from "next/head";
import Header from "../components/detail-header";
import ZoomModal from "../components/zoom-modal";
import StickyButtons from "../components/sticky-buttons";
import Footer from '../components/footer';
import { useState, useCallback } from "react";
import { useApp } from "../context/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";

const exteriorImages = [
  "/life/outside/life-outside-1.webp","/life/outside/life-outside-2.webp",
  "/life/outside/life-outside-3.webp","/life/outside/life-outside-4.webp",
  "/life/outside/life-outside-5.webp","/life/outside/life-outside-6.webp",
  "/life/outside/life-outside-7.webp","/life/outside/life-outside-8.webp",
  "/life/outside/life-outside-9.webp",
];
const interiorImages = [
  "/life/inside/life-inside-1.webp","/life/inside/life-inside-2.webp",
  "/life/inside/life-inside-3.webp","/life/inside/life-inside-4.webp",
  "/life/inside/life-inside-5.webp","/life/inside/life-inside-6.webp",
  "/life/inside/life-inside-7.webp","/life/inside/life-inside-8.webp",
  "/life/inside/life-inside-9.webp","/life/inside/life-inside-10.webp",
  "/life/inside/life-inside-11.webp","/life/inside/life-inside-12.webp",
  "/life/inside/life-inside-13.webp","/life/inside/life-inside-14.webp",
  "/life/inside/life-inside-15.webp",
];
const floorImages = [
  "/life/flats/life-flats-1.webp",
  "/life/flats/life-flats-2.webp",
  "/life/flats/life-flats-3.webp",
];

export default function PostacilarLife() {
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleNextStart = useCallback((swiper) => {
    swiper.slides.forEach(s => s.classList.remove('slide-entering'));
    const perView = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 4;
    const enterSlide = swiper.slides[swiper.activeIndex + perView];
    if (enterSlide) enterSlide.classList.add('slide-entering');
  }, []);

  const handleTransitionEnd = useCallback((swiper) => {
    swiper.slides.forEach(s => s.classList.remove('slide-entering'));
  }, []);

  const { t } = useApp();
  const openModal = (images, index) => {
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
        <title>POSTACILAR | LIFE</title>
        <meta name="description" content="Postacılar Life — Bursa'da konforlu ve modern yaşam alanları. Dış cephe görselleri, iç tasarım ve daire tipleri için inceleyin." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.postacilar.com/postacilar-life" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="POSTACILAR | LIFE" />
        <meta property="og:description" content="Postacılar Life — Bursa'da konforlu ve modern yaşam alanları. Dış cephe görselleri, iç tasarım ve daire tipleri için inceleyin." />
        <meta property="og:url" content="https://www.postacilar.com/postacilar-life" />
        <meta property="og:image" content="https://www.postacilar.com/life/outside/life-outside-1.webp" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="POSTACILAR | LIFE" />
        <meta name="twitter:description" content="Postacılar Life — Bursa'da konforlu ve modern yaşam alanları. Dış cephe görselleri, iç tasarım ve daire tipleri için inceleyin." />
        <meta name="twitter:image" content="https://www.postacilar.com/life/outside/life-outside-1.webp" />
      </Head>
      <Header />

      <div className="detail-hero">
        <img src="/life/hero/life-hero.webp" className="detail-hero-bg" />
        <div className="detail-hero-logo">
          <img src="/life/postacılar-life-logo.webp" />
        </div>
      </div>

      <div className="container-fluid detail-container">


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life/life-logo.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              <span className="detail-accent">{t('details.sections.about')}</span>
            </div>
            <div className="detail-paragraph">{t('details.life.about')}</div>
          </div>
        </div>


        <div className="row life-details-row">
          <div className="col-12 col-md-6 life-details-col">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life/life-logo.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              <span className="detail-accent">{t('details.sections.projectDetails')}</span>
            </div>
            <div className="detail-paragraph" dangerouslySetInnerHTML={{ __html: t('details.life.details').replace(/\n/g, '<br/>') }} />
            <a href="/catalogs/life-katalog.pdf" target="_blank" rel="noopener noreferrer" className="catalog-btn">
              {t('details.sections.viewCatalog')}
            </a>
          </div>
          <div className="col-12 col-md-6 life-floor-col">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life/life-logo.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              <span className="detail-accent">{t('details.sections.flatTypes')}</span>
            </div>
            <div className="detail-swiper-mobile flat-types-swiper">
              <Swiper modules={[Navigation, Autoplay]} navigation loop={true} autoplay={{ delay: 2800, disableOnInteraction: false }} speed={800} spaceBetween={8} slidesPerView={1}>
                {floorImages.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img onClick={() => openModal(floorImages, i)} src={src} style={{cursor:"zoom-in"}} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flat-types-inline flat-types-desktop">
              <div className="flat-inline-item">
                <img onClick={() => openModal(floorImages, 0)} src="/life/flats/life-flats-1.webp" style={{cursor:"zoom-in"}} />
              </div>
              <div className="flat-inline-item">
                <img onClick={() => openModal(floorImages, 1)} src="/life/flats/life-flats-2.webp" style={{cursor:"zoom-in"}} />
              </div>
              <div className="flat-inline-item">
                <img onClick={() => openModal(floorImages, 2)} src="/life/flats/life-flats-3.webp" style={{cursor:"zoom-in"}} />
              </div>
            </div>
          </div>
        </div>


        <div className="life-exterior-section">
          <div className="detail-sub-title">
            <div className="detail-title">
              <div className="prestige-logo"><img src="/life/life-logo.webp" /></div>
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
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        <div className="life-interior-section">
          <div className="detail-sub-title">
            <div className="detail-title">
              <div className="prestige-logo"><img src="/life/life-logo.webp" /></div>
            </div>
            <span className="detail-sub-title-stick"><div>|</div></span>
            <span className="detail-accent">{t('details.sections.interiorDesign')}</span>
          </div>
          <div className="detail-swiper-mobile">
            <Swiper modules={[Navigation, Autoplay]} navigation loop={true} autoplay={{ delay: 2800, disableOnInteraction: false }} speed={800} spaceBetween={8} slidesPerView={1} onSlideNextTransitionStart={handleNextStart} onTransitionEnd={handleTransitionEnd}>
              {interiorImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <img onClick={() => openModal(interiorImages, i)} src={src} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="detail-mosaic-desktop images zoomable-img">
            <div className="row align-items-end g-4">
              <div className="col-3">
                <img onClick={() => openModal(interiorImages, 0)} width="100%" height="auto" src="/life/inside/life-inside-1.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(interiorImages, 1)} width="100%" height="auto" src="/life/inside/life-inside-2.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
              </div>
              <div className="col-4">
                <img onClick={() => openModal(interiorImages, 2)} width="100%" height="auto" src="/life/inside/life-inside-3.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="row g-4 mt-3">
              <div className="col-5">
                <img onClick={() => openModal(interiorImages, 3)} width="100%" height="auto" src="/life/inside/life-inside-4.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
              </div>
              <div className="col-3">
                <img onClick={() => openModal(interiorImages, 4)} width="100%" height="auto" src="/life/inside/life-inside-5.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
              </div>
              <div className="col-4">
                <img onClick={() => openModal(interiorImages, 5)} width="100%" height="auto" src="/life/inside/life-inside-6.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
      <StickyButtons />
    </>
  );
}
