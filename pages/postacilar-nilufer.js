import Head from 'next/head'
import Header from '../components/detail-header'
import ZoomModal from '../components/zoom-modal'
import { useState, useRef, useEffect } from 'react';

export default function PostacilarNilufer() {
    const [modalSrc, setModalSrc] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showVModal, setShowVModal] = useState(false);

    const refx = useRef(null);
    useOutsideAlerter(refx);

    const projectsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const aboutUsSectionRef = useRef(null)

    return (
        <>
            {showModal && <ZoomModal zoomRef={refx} imageSrc={modalSrc} />}
            {showVModal && <ZoomModal zoomRef={refx} verticalImage={true} imageSrc={modalSrc} />}

            <Head>
                <title>POSTACILAR | NİLÜFER</title>
                <meta name="description" content="Postacılar Yapı | Nilüfer Evleri" />
                <link rel="icon" href="/meta-logo.png" />
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
                                Esenler mahallesinde konumlanan ve ilk projemiz olan nilüfer evleri bulunduğu çevrede kendini farklılaştıran,
                                firma prensiplerimiz doğrultusunda sizlere huzur, konfor ve rahatlığı sunan bir projedir. Açık otopark, çocuk
                                oyun parkı ve yeşil alanlar bulunduran proje ferah daire çözümleriylede dikkat çekmektedir.

                            </div>
                            <div className="detail-sub-title">
                                NİLÜFER <span className="detail-sub-title-stick"><div>|</div></span> Proje detayları
                            </div>
                            <div className="detail-paragraph">
                                Nilüfer evleri iki blok ve toplam 36 daireden oluşmaktadır.<br/>
                                24 adet 3+1<br/>
                                12 adet 2+1<br/>
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
                                    <img onClick={() => { setShowVModal(true); setModalSrc("/nilufer/nilufer3.jpg") }} width="70%" height="auto" src="/nilufer/nilufer3.jpg" />
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
                    setShowVModal(false);
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