import Head from "next/head";
import Header from "../components/detail-header";
import ZoomModal from "../components/zoom-modal";
import StickyButtons from "../components/sticky-buttons";
import Footer from "../components/footer";
import { useState } from "react";

const images = [
  "/nilufer/nilufer2.webp",
  "/nilufer/nilufer1.webp",
  "/nilufer/nilufer3.webp",
];

export default function PostacilarNilufer() {
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
              NİLÜFER <span className="detail-sub-title-stick">|</span> Hakkında
            </div>
            <div className="detail-paragraph">
              Esenler mahallesinde konumlanan ve ilk projemiz olan Nilüfer Evleri
              bulunduğu çevrede kendini farklılaştıran, firma prensiplerimiz
              doğrultusunda sizlere huzur, konfor ve rahatlığı sunan bir projedir.
              Açık otopark, çocuk oyun parkı ve yeşil alanlar bulunduran proje
              ferah daire çözümleriyle de dikkat çekmektedir.
            </div>
          </div>
        </div>

        {/* ── ROW 2: PROJE DETAYLARI ── */}
        <div className="row life-about-row">
          <div className="col-12">
            <div className="detail-sub-title">
              NİLÜFER <span className="detail-sub-title-stick">|</span> Proje Detayları
            </div>
            <div className="detail-paragraph">
              Nilüfer Evleri iki blok ve toplam 36 daireden oluşmaktadır.<br />
              24 adet 3+1<br />
              12 adet 2+1
            </div>
          </div>
        </div>

        {/* ── GÖRSELLER ── */}
        <div className="life-interior-section">
          <div className="detail-sub-title">
            NİLÜFER <span className="detail-sub-title-stick">|</span> Görseller
          </div>
          <div className="images zoomable-img">
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
