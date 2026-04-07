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
  "/nilufer/nilufer2.webp",
  "/nilufer/nilufer1.webp",
  "/nilufer/nilufer3.webp",
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
        <meta name="description" content="Postacılar Yapı | Nilüfer Evleri" />
        <link rel="icon" href="/meta-logo.webp" />
      </Head>
      <Header />

      <div className="container-fluid detail-container">

        {/* ── BAŞLIK ── */}
        <div className="life-logo-section">
          <div className="detail-title">
            POSTACILAR <span className="detail-title-stick">|</span> NİLÜFER
          </div>
        </div>

        {/* ── ROW 1: HAKKINDA ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              NİLÜFER <span className="detail-sub-title-stick">|</span> {t('details.sections.about')}
            </div>
            <div className="detail-paragraph">{t('details.nilufer.about')}</div>
          </div>
        </div>

        {/* ── ROW 2: PROJE DETAYLARI ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              NİLÜFER <span className="detail-sub-title-stick">|</span> {t('details.sections.projectDetails')}
            </div>
            <div className="detail-paragraph" dangerouslySetInnerHTML={{ __html: t('details.nilufer.details').replace(/\n/g, '<br/>') }} />
          </div>
        </div>

        {/* ── GÖRSELLER ── */}
        <div className="life-interior-section">
          <div className="detail-sub-title">
            NİLÜFER <span className="detail-sub-title-stick">|</span> {t('details.sections.visuals')}
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
            <div className="row align-items-end g-1">
              <div className="col-5">
                <img onClick={() => openModal(1)} width="100%" height="auto" src="/nilufer/nilufer1.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-4">
                <img onClick={() => openModal(0)} width="100%" height="auto" src="/nilufer/nilufer2.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-3">
                <img onClick={() => openModal(2)} width="100%" height="auto" src="/nilufer/nilufer3.webp" style={{cursor:"zoom-in", display:"block"}} />
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
