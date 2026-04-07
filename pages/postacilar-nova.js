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
  "/nova/nova_slides_1.webp","/nova/nova_slides_2.webp","/nova/nova_slides_3.webp",
  "/nova/nova1.webp","/nova/nova2.webp","/nova/nova3.webp",
];

const detailImages = [
  "/nova/detay4.webp","/nova/detay3.webp","/nova/detay1.webp","/nova/detay2.webp",
];

export default function PostacilarNova() {
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
        <title>POSTACILAR | NOVA</title>
        <meta name="description" content="Postacılar Yapı | Nova Evleri" />
        <link rel="icon" href="/meta-logo.webp" />
      </Head>
      <Header />

      <div className="container-fluid detail-container">

        {/* ── BAŞLIK ── */}
        <div className="life-logo-section">
          <div className="detail-title">
            POSTACILAR <span className="detail-title-stick">|</span> NOVA
          </div>
        </div>

        {/* ── ROW 1: HAKKINDA ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              NOVA <span className="detail-sub-title-stick">|</span> {t('details.sections.about')}
            </div>
            <div className="detail-paragraph">{t('details.nova.about')}</div>
          </div>
        </div>

        {/* ── ROW 2: PROJE DETAYLARI ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              NOVA <span className="detail-sub-title-stick">|</span> {t('details.sections.projectDetails')}
            </div>
            <div className="detail-paragraph" dangerouslySetInnerHTML={{ __html: t('details.nova.details').replace(/\n/g, '<br/>') }} />
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

        {/* ── DETAY GÖRSELLERİ ── */}
        <div className="life-interior-section">
          <div className="detail-sub-title">
            NOVA <span className="detail-sub-title-stick">|</span> {t('details.sections.interiorDesign')}
          </div>
          <div className="detail-swiper-mobile">
            <Swiper modules={[Navigation, Autoplay]} navigation loop={true} autoplay={{ delay: 2800, disableOnInteraction: false }} speed={800} spaceBetween={8} slidesPerView={1} onSlideNextTransitionStart={handleNextStart} onTransitionEnd={handleTransitionEnd}>
              {detailImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <img onClick={() => openModal(detailImages, i)} src={src} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="detail-mosaic-desktop images zoomable-img">
            <div className="row align-items-end g-1">
              <div className="col-7">
                <img onClick={() => openModal(detailImages, 0)} width="100%" height="auto" src="/nova/detay4.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(detailImages, 1)} width="100%" height="auto" src="/nova/detay3.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
            </div>
            <div className="row g-1 mt-1">
              <div className="col-5">
                <img onClick={() => openModal(detailImages, 2)} width="100%" height="auto" src="/nova/detay1.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-7">
                <img onClick={() => openModal(detailImages, 3)} width="100%" height="auto" src="/nova/detay2.webp" style={{cursor:"zoom-in", display:"block"}} />
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
