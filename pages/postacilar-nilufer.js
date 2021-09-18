import Head from 'next/head'
import Header from '../components/detail-header'
import ZoomModal from '../components/zoom-modal'
import { useState, useRef, useEffect } from 'react';

export default function () {
    const [modalSrc, setModalSrc] = useState("");
    const [showModal, setShowModal] = useState(false);
    const refx = useRef(null);
    useOutsideAlerter(refx);

    const projectsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const aboutUsSectionRef = useRef(null)

    return (
        <>
            {showModal && <ZoomModal zoomRef={refx} imageSrc={modalSrc} />}
            <Head>
                <title>POSTACILAR | NİLÜFER</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
            <div className="container-fluid detail-container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="row">
                            <div className="detail-title">
                                POSTACILAR <span className="detail-title-stick"><div>|</div></span> NİLÜFER
                            </div>
                            <div className="col-12 col-md-7 nilufer-right-col nilufer-img-component-mobile">
                                <div className="row">
                                    <div className="col-6 nilufer-left-image">
                                        <img onClick={() => { setShowModal(true); setModalSrc("/nilufer/nilufer2.jpg") }} width="100%" height="auto" src="/nilufer/nilufer2.jpg" />
                                    </div>
                                    <div className="col-6">
                                        <div className="nilufer-right-top-image">
                                            <img onClick={() => { setShowModal(true); setModalSrc("/nilufer/nilufer1.jpg") }} width="100%" height="auto" src="/nilufer/nilufer1.jpg" />
                                        </div>
                                        <div>
                                            <img onClick={() => { setShowModal(true); setModalSrc("/nilufer/nilufer3.jpg") }} width="80%" height="auto" src="/nilufer/nilufer3.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-sub-title">
                                NİLÜFER<span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Çanakkale Esenler Mahallesinde Huzur, Konfor ve Rahatlığı sizlerle buluşturan bir proje. Toplam 2 bloktan oluşan, 36 daire, otopark, çocuk oyun parkı
                                ve yeşil alanları bulunan bir projedir. Özenle tasarlanmış ferah daireleri aranılan konforun adresi olmuştur.
                            </div>
                            <div className="detail-sub-title">
                                NİLÜFER <span className="detail-sub-title-stick"><div>|</div></span> Proje detayları
                            </div>
                            <div className="detail-paragraph">
                                Daire Sayısı: 36 <br />
                                Daire Tipleri: 24 Adet 3+1 & 12 Adet 2+1 <br />
                                Adres: Esenler Mah. Okulyolu Sokak Merkez / Çanakkale
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 nilufer-right-col nilufer-img-component-desktop">
                        <div className="row">
                            <div className="col-6 nilufer-left-image">
                                <img onClick={() => { setShowModal(true); setModalSrc("/nilufer/nilufer2.jpg") }} width="80%" height="auto" src="/nilufer/nilufer2.jpg" />
                            </div>
                            <div className="col-6">
                                <div className="nilufer-right-top-image">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/nilufer/nilufer1.jpg") }} width="90%" height="auto" src="/nilufer/nilufer1.jpg" />
                                </div>
                                <div className="nilufer-right-bottom-image">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/nilufer/nilufer3.jpg") }} width="70%" height="auto" src="/nilufer/nilufer3.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowModal(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
}