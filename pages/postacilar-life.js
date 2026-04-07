import Head from "next/head";
import Header from "../components/detail-header";
import ZoomModal from "../components/zoom-modal";
import StickyButtons from "../components/sticky-buttons";
import Footer from '../components/footer';
import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";

const exteriorImages = ["/1.webp","/2.webp","/3.webp","/4.webp","/5.webp","/6.webp","/7.webp","/8.webp"];
const interiorImages = ["/1-mutfak.webp","/2-yatak-odası.webp","/3-mutfak.webp","/4-cocuk-odası.webp","/5-banyo.webp","/6-antre.webp"];
const floorImages = ["/3+1-ara.webp","/3+1-köse.webp"];

export default function PostacilarLife() {
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // En sağdan girerken animasyon (sola çekerken)
  const handleNextStart = useCallback((swiper) => {
    swiper.slides.forEach(s => s.classList.remove('slide-entering'));
    const perView = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 4;
    const enterSlide = swiper.slides[swiper.activeIndex + perView];
    if (enterSlide) enterSlide.classList.add('slide-entering');
  }, []);

  const handleTransitionEnd = useCallback((swiper) => {
    swiper.slides.forEach(s => s.classList.remove('slide-entering'));
  }, []);

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
        <meta name="description" content="Postacılar Yapı | Life Evleri" />
        <link rel="icon" href="/meta-logo.webp" />
      </Head>
      <Header />

      <div className="container-fluid detail-container">

        {/* ── LOGO ── */}
        <div className="life-logo-section">
          <div className="detail-title">
            <div className="postacilar-life-logo">
              <img src="/life/postacılar-life-logo.webp" />
            </div>
          </div>
        </div>

        {/* ── ROW 1: HAKKINDA (full width) ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life/life-logo.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              Hakkında
            </div>
            <div className="detail-paragraph">
              Postacılar Life esenler mahallesinde konumlanan projemizdir.
              Postacılar Life 60 metrelik yol olarak adlandırılan bölgede
              şirketimiz bünyesinde gerçekleştirilen ilk projesidir.
              Kullanıcılarına en iyisini vermeyi amaçlayan projede modern
              mimari ve iç tasarımın yanı sıra her dairenin kendine ait kapalı
              otopark alanı bulunmaktadır.
            </div>
          </div>
        </div>

        {/* ── ROW 2: PROJE DETAYLARI + DAİRE TİPLERİ ── */}
        <div className="row life-details-row">
          <div className="col-12 col-md-6 life-details-col">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life/life-logo.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              Proje Detayları
            </div>
            <div className="detail-paragraph">
              Daire Sayısı: 42 adet <br />
              Daire Tipi: 3+1 <br />
              İşyeri Sayısı: 3 <br />
              Adres: Esenler Mahallesi, Şehit Ömer <br />
              Halis Demir Caddesi, No: 18/2, Çanakkale/Merkez
            </div>
            <a href="/catalogs/life-katalog.pdf" target="_blank" rel="noopener noreferrer" className="catalog-btn">
              Kataloğu Görüntüle
            </a>
          </div>
          <div className="col-12 col-md-6 life-floor-col">
            <div className="detail-sub-title">
              <div className="detail-title">
                <div className="prestige-logo"><img src="/life/life-logo.webp" /></div>
              </div>
              <span className="detail-sub-title-stick"><div>|</div></span>
              Daire Tipleri
            </div>
            <div className="flat-types-inline">
              <div className="flat-inline-item">
                <img onClick={() => openModal(floorImages, 0)} src="/3+1-ara.webp" style={{cursor:"zoom-in"}} />
              </div>
              <div className="flat-inline-item">
                <img onClick={() => openModal(floorImages, 1)} src="/3+1-köse.webp" style={{cursor:"zoom-in"}} />
              </div>
            </div>
          </div>
        </div>

        {/* ── DIŞ GÖRÜNÜM SWİPER — 4 aynı anda, auto-play ── */}
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
              <div className="prestige-logo"><img src="/life/life-logo.webp" /></div>
            </div>
            <span className="detail-sub-title-stick"><div>|</div></span>
            İç Tasarım
          </div>
          <div className="images zoomable-img">
            <div className="row align-items-end g-1">
              <div className="col-5">
                <img onClick={() => openModal(interiorImages, 0)} width="100%" height="auto" src="/1-mutfak.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-4">
                <img onClick={() => openModal(interiorImages, 1)} width="100%" height="auto" src="/2-yatak-odası.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-3">
                <img onClick={() => openModal(interiorImages, 2)} width="100%" height="auto" src="/3-mutfak.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
            </div>
            <div className="row g-1 mt-1">
              <div className="col-4">
                <img onClick={() => openModal(interiorImages, 3)} width="100%" height="auto" src="/4-cocuk-odası.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-3">
                <img onClick={() => openModal(interiorImages, 4)} width="100%" height="auto" src="/5-banyo.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(interiorImages, 5)} width="100%" height="auto" src="/6-antre.webp" style={{cursor:"zoom-in", display:"block"}} />
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
