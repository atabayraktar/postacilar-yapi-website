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
  "/nova/hero/nova-hero.webp",
  "/nova/outside/nova-outside-1.webp",
  "/nova/outside/nova-outside-2.webp",
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
        <title>Postacılar Nova | Çanakkale Deniz Manzaralı Satılık 1+1 2+1 3+1 Daire</title>
        <meta name="description" content="Postacılar Nova — Çanakkale'de deniz manzaralı, modern konut projesi. 1+1, 2+1, 3+1 ve dubleks satılık daire seçenekleri. Park yakını, konforlu ve güvenli yaşam alanı. Postacılar Yapı." />
        <meta name="keywords" content="Postacılar Nova, çanakkale deniz manzaralı daire, çanakkale 1+1 satılık daire, çanakkale 2+1 satılık daire, çanakkale 3+1 satılık daire, çanakkale dubleks daire, çanakkale sıfır daire, Postacılar Yapı Nova, modern konut Çanakkale, çanakkale satılık daire" />
        <meta name="author" content="Postacılar Yapı" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="TR-17" />
        <meta name="geo.placename" content="Çanakkale" />
        <link rel="canonical" href="https://www.postacilar.com/postacilar-nova" />
        <link rel="icon" href="/meta-logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Postacılar Yapı" />
        <meta property="og:title" content="Postacılar Nova | Çanakkale Konut Projesi" />
        <meta property="og:description" content="Postacılar Nova — Çanakkale'de şık ve işlevsel tasarımıyla öne çıkan konut projesi. Modern mimari anlayışı ve yaşam konforu bir arada." />
        <meta property="og:url" content="https://www.postacilar.com/postacilar-nova" />
        <meta property="og:image" content="https://www.postacilar.com/nova/outside/nova-outside-1.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Postacılar Nova — Çanakkale konut projesi dış cephe" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Postacılar Nova | Çanakkale Konut Projesi" />
        <meta name="twitter:description" content="Postacılar Nova — Çanakkale'de şık ve işlevsel tasarımıyla öne çıkan konut projesi. Proje detayları ve görseller için inceleyin." />
        <meta name="twitter:image" content="https://www.postacilar.com/nova/outside/nova-outside-1.webp" />
        <meta name="twitter:image:alt" content="Postacılar Nova Çanakkale konut projesi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            "name": "Postacılar Nova",
            "url": "https://www.postacilar.com/postacilar-nova",
            "image": "https://www.postacilar.com/nova/outside/nova-outside-1.webp",
            "description": "Çanakkale'de deniz manzaralı, park yakını modern konut projesi. 1+1, 2+1, 3+1 ve dubleks daire seçenekleri.",
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
        <img src="/nova/hero/nova-hero.webp" className="detail-hero-bg" alt="Postacılar Nova projesi dış cephe görünümü" />
        <div className="detail-hero-title">
          <div className="detail-title">
            <img src="/postacilar-logo.png" className="hero-postacilar-logo" alt="Postacılar Yapı logosu" /> <span className="detail-title-stick">|</span> <span className="detail-title-name" style={{marginRight: '-5px'}}>NOVA</span>
          </div>
        </div>
      </div>

      <div className="container-fluid detail-container">


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              NOVA <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.about')}</span>
            </div>
            <div className="detail-paragraph">{t('details.nova.about')}</div>
          </div>
        </div>


        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              NOVA <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.projectDetails')}</span>
            </div>
            <div className="detail-paragraph" dangerouslySetInnerHTML={{ __html: t('details.nova.details').replace(/\n/g, '<br/>') }} />
          </div>
        </div>


        <div className="life-interior-section">
          <div className="detail-sub-title">
            NOVA <span className="detail-sub-title-stick">|</span> <span className="detail-accent">{t('details.sections.visuals')}</span>
          </div>
          <div className="detail-swiper-mobile">
            <Swiper modules={[Navigation, Autoplay]} navigation loop={true} autoplay={{ delay: 2800, disableOnInteraction: false }} speed={800} spaceBetween={8} slidesPerView={1} onSlideNextTransitionStart={handleNextStart} onTransitionEnd={handleTransitionEnd}>
              {exteriorImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <img onClick={() => openModal(exteriorImages, i)} src={src} alt={`Postacılar Nova görsel ${i + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="detail-mosaic-desktop images zoomable-img">
            <div className="row align-items-end g-4">
              <div className="col-7">
                <img onClick={() => openModal(exteriorImages, 0)} width="100%" height="auto" src="/nova/outside/nova-outside-1.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Nova dış cephe 1" />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(exteriorImages, 1)} width="100%" height="auto" src="/nova/outside/nova-outside-2.webp" style={{cursor:"zoom-in", display:"block"}} loading="lazy" decoding="async" alt="Postacılar Nova dış cephe 2" />
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
