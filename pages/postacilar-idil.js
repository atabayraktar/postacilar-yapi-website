import Head from "next/head";
import Header from "../components/detail-header";
import ZoomModal from "../components/zoom-modal";
import StickyButtons from "../components/sticky-buttons";
import Footer from "../components/footer";
import { useState } from "react";

const images = [
  "/idil/idil1.webp",
  "/idil/idil2.webp",
];

export default function PostacilarIdil() {
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
        <title>POSTACILAR | İDİL</title>
        <meta name="description" content="Postacılar Yapı | İdil Evleri" />
        <link rel="icon" href="/meta-logo.webp" />
      </Head>
      <Header />

      <div className="container-fluid detail-container">

        {/* ── BAŞLIK ── */}
        <div className="life-logo-section">
          <div className="detail-title">
            POSTACILAR <span className="detail-title-stick">|</span> İDİL
          </div>
        </div>

        {/* ── ROW 1: HAKKINDA ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              İDİL <span className="detail-sub-title-stick">|</span> Hakkında
            </div>
            <div className="detail-paragraph">
              Esenler mahallesinde bulunan İdil Evleri 10 daireden oluşan bir
              apartman projesi olup şehir merkezi, okul, park ve hastanelere
              yakın bir konuma sahiptir.
            </div>
          </div>
        </div>

        {/* ── ROW 2: PROJE DETAYLARI ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              İDİL <span className="detail-sub-title-stick">|</span> Proje Detayları
            </div>
            <div className="detail-paragraph">
              İdil Evleri bölgenin talepleri doğrultusunda tasarlanmıştır.<br />
              6 adet 1+1<br />
              4 adet 2+1
            </div>
          </div>
        </div>

        {/* ── GÖRSELLER ── */}
        <div className="life-interior-section">
          <div className="detail-sub-title">
            İDİL <span className="detail-sub-title-stick">|</span> Görseller
          </div>
          <div className="images zoomable-img">
            <div className="row align-items-end g-1">
              <div className="col-5">
                <img onClick={() => openModal(0)} width="100%" height="auto" src="/idil/idil1.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-4">
                <img onClick={() => openModal(1)} width="100%" height="auto" src="/idil/idil2.webp" style={{cursor:"zoom-in", display:"block"}} />
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
