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
  "/prestige/prestige_slide_1.webp","/prestige/prestige_slide_2.webp",
  "/prestige/prestige_slide_3.webp","/prestige/prestige_slide_4.webp",
  "/prestige/prestige_slide_5.webp",
];

const interiorImages = [
  "/prestige/pres1.webp","/prestige/pres2.webp","/prestige/pres3.webp",
  "/prestige/pres4.webp","/prestige/pres5.webp","/prestige/pres6.webp",
];

export default function PostacilarPrestige() {
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
        <title>POSTACILAR | PRESTIGE</title>
        <meta name="description" content="Postacılar Yapı | Prestige Evleri" />
        <link rel="icon" href="/meta-logo.webp" />
      </Head>
      <Header />

      <div className="container-fluid detail-container">

        {/* ── LOGO ── */}
        <div className="life-logo-section">
          <div className="detail-title">
            POSTACILAR <span className="detail-title-stick">|</span>
            <div className="prestige-logo-big">
              <img src="/prestige.webp" />
            </div>
          </div>
        </div>

        {/* ── ROW 1: HAKKINDA ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/prestige.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              {t('details.sections.about')}
            </div>
            <div className="detail-paragraph">{t('details.prestige.about')}</div>
          </div>
        </div>

        {/* ── ROW 2: PROJE DETAYLARI ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/prestige.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              {t('details.sections.projectDetails')}
            </div>
            <div className="detail-paragraph" dangerouslySetInnerHTML={{ __html: t('details.prestige.details').replace(/\n/g, '<br/>') }} />
          </div>
        </div>

        {/* ── DIŞ GÖRÜNÜM SWİPER ── */}
        <div className="life-exterior-section">
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

        {/* ── İÇ TASARIM ── */}
        <div className="life-interior-section">
          <div className="detail-sub-title">
            <div className="detail-title">
              <div className="prestige-logo"><img src="/prestige.webp" /></div>
            </div>
            <span className="detail-sub-title-stick"><div>|</div></span>
            {t('details.sections.interiorDesign')}
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
            <div className="row align-items-end g-1">
              <div className="col-5">
                <img onClick={() => openModal(interiorImages, 0)} width="100%" height="auto" src="/prestige/pres1.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-4">
                <img onClick={() => openModal(interiorImages, 1)} width="100%" height="auto" src="/prestige/pres2.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-3">
                <img onClick={() => openModal(interiorImages, 2)} width="100%" height="auto" src="/prestige/pres3.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
            </div>
            <div className="row g-1 mt-1">
              <div className="col-4">
                <img onClick={() => openModal(interiorImages, 3)} width="100%" height="auto" src="/prestige/pres4.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-3">
                <img onClick={() => openModal(interiorImages, 4)} width="100%" height="auto" src="/prestige/pres5.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(interiorImages, 5)} width="100%" height="auto" src="/prestige/pres6.webp" style={{cursor:"zoom-in", display:"block"}} />
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
