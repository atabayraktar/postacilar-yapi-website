import Head from "next/head";
import Header from "../components/detail-header";
import ZoomModal from "../components/zoom-modal";
import StickyButtons from "../components/sticky-buttons";
import Footer from "../components/footer";
import { useState } from "react";

const images = [
  "/yakamoz/yakamoz2.webp",
  "/yakamoz/yakamoz1.webp",
  "/yakamoz/yakamoz4.webp",
  "/yakamoz/yakamoz3.webp",
];

export default function PostacilarYakamoz() {
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
        <title>POSTACILAR | YAKAMOZ</title>
        <meta name="description" content="Postacılar Yapı | Yakamoz Evleri" />
        <link rel="icon" href="/meta-logo.webp" />
      </Head>
      <Header />

      <div className="container-fluid detail-container">

        {/* ── BAŞLIK ── */}
        <div className="life-logo-section">
          <div className="detail-title">
            POSTACILAR <span className="detail-title-stick">|</span> YAKAMOZ
          </div>
        </div>

        {/* ── ROW 1: HAKKINDA ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              YAKAMOZ <span className="detail-sub-title-stick">|</span> Hakkında
            </div>
            <div className="detail-paragraph">
              Barbaros mahallesi 100. yıl caddesinde konumlanan proje Çanakkalenin
              göz bebeği yeni kordona bakmakta, göz kamaştıran bir boğaz manzarası
              sunmaktadır. Dairelere tanımlı açık otopark alanı bulunan projemiz
              modern ve yalın bir tasarıma sahiptir.
            </div>
          </div>
        </div>

        {/* ── ROW 2: PROJE DETAYLARI ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              YAKAMOZ <span className="detail-sub-title-stick">|</span> Proje Detayları
            </div>
            <div className="detail-paragraph">
              Yakamoz evleri katta bir daire konumlamasıyla geniş metrekarelere sahip bir projedir.<br />
              3 adet 3+1<br />
              1 adet 4+1 dubleks<br />
              1 adet iş yeri
            </div>
          </div>
        </div>

        {/* ── GÖRSELLER ── */}
        <div className="life-interior-section">
          <div className="detail-sub-title">
            YAKAMOZ <span className="detail-sub-title-stick">|</span> Görseller
          </div>
          <div className="images zoomable-img">
            <div className="row align-items-end g-1">
              <div className="col-7">
                <img onClick={() => openModal(0)} width="100%" height="auto" src="/yakamoz/yakamoz2.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-5">
                <img onClick={() => openModal(1)} width="100%" height="auto" src="/yakamoz/yakamoz1.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
            </div>
            <div className="row g-1 mt-1">
              <div className="col-5">
                <img onClick={() => openModal(2)} width="100%" height="auto" src="/yakamoz/yakamoz4.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-7">
                <img onClick={() => openModal(3)} width="100%" height="auto" src="/yakamoz/yakamoz3.webp" style={{cursor:"zoom-in", display:"block"}} />
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
