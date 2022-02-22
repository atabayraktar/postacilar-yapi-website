import Head from 'next/head'
import Header from '../components/detail-header'
import ZoomModal from '../components/zoom-modal'
import { useState, useRef, useEffect } from 'react';

export default function () {
    const [modalSrc, setModalSrc] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showVModal, setShowVModal] = useState(false);

    const refx = useRef(null);
    useOutsideAlerter(refx);

    return (
        <>
            {showModal && <ZoomModal size="modal-35" zoomRef={refx} verticalImage={true} imageSrc={modalSrc} />}
            {showVModal && <ZoomModal size="modal" zoomRef={refx} imageSrc={modalSrc} />}
            <Head>
                <title>POSTACILAR | İDİL</title>
                <meta name="description" content="Postacılar Yapı | İdil Evleri" />
                <link rel="icon" href="/meta-logo.png" />
            </Head>
            <Header />
            <div className="container-fluid detail-container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="row">
                            <div className="detail-title">
                                POSTACILAR <span className="detail-title-stick"><div>|</div></span> İDİL
                            </div>
                            <div className="col-12 idil-right-col idil-img-component-mobile ">
                                <div className="row">
                                    <div className="col-6 idil-img-1">
                                        <img onClick={() => { setShowVModal(true); setModalSrc("/idil/idil1.jpg") }} width="100%" height="auto" src="/idil/idil1.jpg" />
                                    </div>
                                    <div className="col-6 idil-img-2">
                                        <img onClick={() => { setShowVModal(true); setModalSrc("/idil/idil2.jpg") }} width="100%" height="auto" src="/idil/idil2.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="detail-sub-title">
                                İDİL<span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Esenler mahallesinde bulunan idil evleri 10 daireden oluşan bir apartman projesi olup
                                şehir merkezi, okul, park ve hastanelere yakın bir konuma sahiptir.
                            </div>
                            <div className="detail-sub-title">
                                İDİL<span className="detail-sub-title-stick"><div>|</div></span>Proje Detayları
                            </div>
                            <div className="detail-paragraph">
                                İdil evleri bölgenin talepleri doğrultusunda tasarlanmıştır.<br />
                                6 adet 1+1<br />
                                4 adet 2+1<br />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 idil-right-col idil-img-component-desktop">
                        <div className="row">
                            <div className="col-6 idil-img-1">
                                <img onClick={() => { setShowModal(true); setModalSrc("/idil/idil1.jpg") }} width="100%" height="auto" src="/idil/idil1.jpg" />
                            </div>
                            <div className="col-6 idil-img-2">
                                <img onClick={() => { setShowModal(true); setModalSrc("/idil/idil2.jpg") }} width="80%" height="auto" src="/idil/idil2.jpg" />
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