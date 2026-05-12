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
  "/nilufer/outside/nilufer-outside-1.webp",
  "/nilufer/outside/nilufer-outside-2.webp",
  "/nilufer/outside/nilufer-outside-3.webp",
  "/nilufer/outside/nilufer-outside-4.webp",
];

export default function PostacilarNilufer() {
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
        <title>POSTACILAR | NİLÜFER</title>
        <meta name="description" content="Postacılar Nilüfer — Bursa Nilüfer'de yaşam kalitesini yükselten konut projesi. Proje detayları ve görseller için inceleyin." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.postacilar.com/postacilar-nilufer" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="POSTACILAR | NİLÜFER" />
        <meta property="og:description" content="Postacılar Nilüfer — Bursa Nilüfer'de yaşam kalitesini yükselten konut projesi. Proje detayları ve görseller için inceleyin." />
        <meta property="og:url" content="https://www.postacilar.com/postacilar-nilufer" />
        <meta property="og:image" content="https://www.postacilar.com/nilufer/outside/nilufer-outside-1.webp" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="POSTACILAR | NİLÜFER" />
        <meta name="twitter:description" content="Postacılar Nilüfer — Bursa Nilüfer'de yaşam kalitesini yükselten konut projesi. Proje detayları ve görseller için inceleyin." />
        <meta name="twitter:image" content="https://www.postacilar.com/nilufer/outside/nilufer-outside-1.webp" />
      </Head>
      <Header />

      <div className="detail-hero">
        <img src="/nilufer/hero/nilüfer-hero.webp" className="detail-hero-bg" />
        <div className="detail-hero-title">
          <div className="detail-title">
            <img src="/postacilar-logo.png" className="hero-postacilar-logo" /> <span className="detail-title-stick">|</span> <span className="detail-title-name">NİLÜFER</span>
          </div>
        </div>
      </div>

      <div className="container-fluid detail-container">


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              NİLÜFER <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.about')}</span>
            </div>
            <div className="detail-paragraph">{t('details.nilufer.about')}</div>
          </div>
        </div>


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              NİLÜFER <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.projectDetails')}</span>
            </div>
            <div className="detail-paragraph" dangerouslySetInnerHTML={{ __html: t('details.nilufer.details').replace(/\n/g, '<br/>') }} />
          </div>
        </div>


        <div className="life-interior-section">
          <div className="detail-sub-title">
            NİLÜFER <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.visuals')}</span>
          </div>
          <div className="detail-swiper-mobile">
            <Swiper modules={[Navigation, Autoplay]} navigation loop={true} autoplay={{ delay: 2800, disableOnInteraction: false }} speed={800} spaceBetween={8} slidesPerView={1} onSlideNextTransitionStart={handleNextStart} onTransitionEnd={handleTransitionEnd}>
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img onClick={() => openModal(i)} src={src} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="detail-mosaic-desktop images zoomable-img">
            <div className="row align-items-end g-4">
              <div className="col-5">
                <img onClick={() => openModal(0)} width="100%" height="auto" src="/nilufer/outside/nilufer-outside-1.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
              </div>
              <div className="col-7">
                <img onClick={() => openModal(1)} width="100%" height="auto" src="/nilufer/outside/nilufer-outside-2.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="row g-4 mt-3">
              <div className="col-7">
                <img onClick={() => openModal(2)} width="100%" height="auto" src="/nilufer/outside/nilufer-outside-3.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(3)} width="100%" height="auto" src="/nilufer/outside/nilufer-outside-4.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" />
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
