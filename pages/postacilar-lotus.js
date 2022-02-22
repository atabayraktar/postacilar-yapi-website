import Head from 'next/head'
import Header from '../components/detail-header'
import ZoomModal from '../components/zoom-modal'
import { useState, useRef, useEffect } from 'react';

export default function () {
    const [modalSrc, setModalSrc] = useState("");
    const [showModal, setShowModal] = useState(false);
    const refx = useRef(null);
    useOutsideAlerter(refx);

    return (
        <>
            {showModal && <ZoomModal size="modal-35" zoomRef={refx} verticalImage={true} imageSrc={modalSrc} />}
            <Head>
                <title>POSTACILAR | LOTUS</title>
                <meta name="description" content="Postacılar Yapı | Lotus Evleri" />
                <link rel="icon" href="/meta-logo.png" />
            </Head>
            <Header />
            <div className="container-fluid detail-container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="row">
                            <div className="detail-title">
                                POSTACILAR <span className="detail-title-stick"><div>|</div></span> LOTUS
                            </div>
                            <div className="col-12 idil-right-col idil-img-component-mobile ">
                                <div className="row">
                                    <div className="col-6 idil-img-1">
                                        <img onClick={() => { setShowModal(true); setModalSrc("/lotus/lotus2.jpg") }} width="100%" height="auto" src="/lotus/lotus2.jpg" />
                                    </div>
                                    <div className="col-6 idil-img-2">
                                        <img onClick={() => { setShowModal(true); setModalSrc("/lotus/lotus1.jpg") }} width="100%" height="auto" src="/lotus/lotus1.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="detail-sub-title">
                                LOTUS<span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Kepez bölgesinde bulunan postacılar lotus kepez sahile yürüme mesafesinde olup aynı zamandada
                                çanakkale boğazı manzarasına sahip 16 daireli bir apartman projesidir.
                            </div>
                            <div className="detail-sub-title">
                                LOTUS<span className="detail-sub-title-stick"><div>|</div></span>Proje Detayları
                            </div>
                            <div className="detail-paragraph">
                                3 iş yeri <br />
                                12 adet 3+1 <br />
                                4 adet 5+2 dubleks <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 idil-right-col idil-img-component-desktop">
                        <div className="row">
                            <div className="col-6 idil-img-1">
                                <img onClick={() => { setShowModal(true); setModalSrc("/lotus/lotus2.jpg") }} width="100%" height="auto" src="/lotus/lotus2.jpg" />
                            </div>
                            <div className="col-6 idil-img-2">
                                <img onClick={() => { setShowModal(true); setModalSrc("/lotus/lotus1.jpg") }} width="100%" height="auto" src="/lotus/lotus1.jpg" />
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