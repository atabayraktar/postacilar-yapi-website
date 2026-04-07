import Head from "next/head";
import Header from "../components/detail-header";
import ZoomModal from "../components/zoom-modal";
import StickyButtons from "../components/sticky-buttons";
import Footer from "../components/footer";
import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";

const exteriorImages = [
  "/life2/outside/1.webp","/life2/outside/2.webp","/life2/outside/3.webp",
  "/life2/outside/4.webp","/life2/outside/5.webp","/life2/outside/6.webp",
  "/life2/outside/7.webp",
];

const interiorImages = [
  "/life2/inside/1.webp","/life2/inside/2.webp","/life2/inside/3.webp",
  "/life2/inside/4.webp","/life2/inside/5.webp","/life2/inside/6.webp",
  "/life2/inside/7.webp","/life2/inside/8.webp","/life2/inside/9.webp",
  "/life2/inside/10.webp","/life2/inside/11.webp","/life2/inside/12.webp",
];

export default function PostacilarLife2() {
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
        <title>POSTACILAR | LIFE 2</title>
        <meta name="description" content="Postacılar Yapı | Life 2 Evleri" />
        <link rel="icon" href="/meta-logo.webp" />
      </Head>
      <Header />

      <div className="container-fluid detail-container">

        {/* ── LOGO ── */}
        <div className="life-logo-section">
          <div className="detail-title">
            <div className="postacilar-life-logo">
              <img src="/life2/postacilar-life2-logo.webp" />
            </div>
          </div>
        </div>

        {/* ── ROW 1: HAKKINDA (full width) ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life2/life2-logo.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              Hakkında
            </div>
            <div className="detail-paragraph">
              Esenler mahallesinin Gazi Meclis Caddesinde konumlanan projemiz
              Postacılar Life projelerinin ikinci etabıdır. Çanakkale Belediyesi'nin
              şehir planında bulunan park alanının yanında konumlanan yapı, kendine
              ait geniş peyzaj alanına sahiptir. Kullanıcılarına en iyisini vermeyi
              amaçlayan projede modern mimari ve iç tasarımın yanı sıra her dairenin
              kendine ait kapalı otopark alanı bulunmaktadır.
            </div>
          </div>
        </div>

        {/* ── ROW 2: PROJE DETAYLARI (full width) ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life2/life2-logo.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              Proje Detayları
            </div>
            <div className="detail-paragraph">
              Daire Sayısı: 42 adet <br />
              Daire Tipleri: 14 adet 3+1, 14 adet 2+1 kapalı mutfak, 14 adet 2+1 açık mutfak <br />
              İşyeri Sayısı: 2 <br />
              Adres: Esenler Mahallesi, Gazi Meclis Caddesi, No: 12, Çanakkale/Merkez
            </div>
            <a href="/catalogs/life2-katalog.pdf" target="_blank" rel="noopener noreferrer" className="catalog-btn">
              Kataloğu Görüntüle
            </a>
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
              <div className="prestige-logo"><img src="/life2/life2-logo.webp" /></div>
            </div>
            <span className="detail-sub-title-stick"><div>|</div></span>
            İç Tasarım
          </div>
          <div className="images zoomable-img">
            {/* Grup 1: resimler 1-6 */}
            <div className="interior-group">
              <div className="row align-items-end g-1">
                <div className="col-5">
                  <img onClick={() => openModal(interiorImages, 0)} src="/life2/inside/1.webp" className="interior-mosaic-img" />
                </div>
                <div className="col-4">
                  <img onClick={() => openModal(interiorImages, 1)} src="/life2/inside/2.webp" className="interior-mosaic-img" />
                </div>
                <div className="col-3">
                  <img onClick={() => openModal(interiorImages, 2)} src="/life2/inside/3.webp" className="interior-mosaic-img" />
                </div>
              </div>
              <div className="row g-1 mt-1">
                <div className="col-4">
                  <img onClick={() => openModal(interiorImages, 3)} src="/life2/inside/4.webp" className="interior-mosaic-img" />
                </div>
                <div className="col-3">
                  <img onClick={() => openModal(interiorImages, 4)} src="/life2/inside/5.webp" className="interior-mosaic-img" />
                </div>
                <div className="col-5">
                  <img onClick={() => openModal(interiorImages, 5)} src="/life2/inside/6.webp" className="interior-mosaic-img" />
                </div>
              </div>
            </div>
            {/* Grup 2: resimler 7-12 — lazy load */}
            <div className="interior-group mt-1">
              <div className="row align-items-end g-1">
                <div className="col-3">
                  <img onClick={() => openModal(interiorImages, 6)} src="/life2/inside/7.webp" className="interior-mosaic-img" />
                </div>
                <div className="col-5">
                  <img onClick={() => openModal(interiorImages, 7)} src="/life2/inside/8.webp" className="interior-mosaic-img" />
                </div>
                <div className="col-4">
                  <img onClick={() => openModal(interiorImages, 8)} src="/life2/inside/9.webp" className="interior-mosaic-img" />
                </div>
              </div>
              <div className="row g-1 mt-1">
                <div className="col-5">
                  <img onClick={() => openModal(interiorImages, 9)} src="/life2/inside/10.webp" className="interior-mosaic-img" />
                </div>
                <div className="col-3">
                  <img onClick={() => openModal(interiorImages, 10)} src="/life2/inside/11.webp" className="interior-mosaic-img" />
                </div>
                <div className="col-4">
                  <img onClick={() => openModal(interiorImages, 11)} src="/life2/inside/12.webp" className="interior-mosaic-img" />
                </div>
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
