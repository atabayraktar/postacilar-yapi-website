import Head from "next/head";
import Header from "../components/detail-header";
import ZoomModal from "../components/zoom-modal";
import StickyButtons from "../components/sticky-buttons";
import Footer from "../components/footer";
import { useState } from "react";

const images = [
  "/lotus/lotus2.webp",
  "/lotus/lotus1.webp",
];

export default function PostacilarLotus() {
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
        <title>POSTACILAR | LOTUS</title>
        <meta name="description" content="Postacılar Yapı | Lotus Evleri" />
        <link rel="icon" href="/meta-logo.webp" />
      </Head>
      <Header />

      <div className="container-fluid detail-container">

        {/* ── BAŞLIK ── */}
        <div className="life-logo-section">
          <div className="detail-title">
            POSTACILAR <span className="detail-title-stick">|</span> LOTUS
          </div>
        </div>

        {/* ── ROW 1: HAKKINDA ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              LOTUS <span className="detail-sub-title-stick">|</span> Hakkında
            </div>
            <div className="detail-paragraph">
              Kepez bölgesinde bulunan Postacılar Lotus, Kepez sahile yürüme
              mesafesinde olup aynı zamanda Çanakkale Boğazı manzarasına sahip
              16 daireli bir apartman projesidir.
            </div>
          </div>
        </div>

        {/* ── ROW 2: PROJE DETAYLARI ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              LOTUS <span className="detail-sub-title-stick">|</span> Proje Detayları
            </div>
            <div className="detail-paragraph">
              3 adet iş yeri<br />
              12 adet 3+1<br />
              4 adet 5+2 dubleks
            </div>
          </div>
        </div>

        {/* ── GÖRSELLER ── */}
        <div className="life-interior-section">
          <div className="detail-sub-title">
            LOTUS <span className="detail-sub-title-stick">|</span> Görseller
          </div>
          <div className="images zoomable-img">
            <div className="row align-items-end g-1">
              <div className="col-5">
                <img onClick={() => openModal(0)} width="100%" height="auto" src="/lotus/lotus2.webp" style={{cursor:"zoom-in", display:"block"}} />
              </div>
              <div className="col-4">
                <img onClick={() => openModal(1)} width="100%" height="auto" src="/lotus/lotus1.webp" style={{cursor:"zoom-in", display:"block"}} />
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
