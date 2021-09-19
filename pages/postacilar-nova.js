import Head from 'next/head'
import Header from '../components/detail-header'
import ZoomModal from '../components/zoom-modal'
import { useState, useRef, useEffect } from 'react';

export default function PostacilarNova() {
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
                <title>POSTACILAR | NOVA</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
            <div className="container-fluid detail-container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="row">
                            <div className="detail-title">
                                POSTACILAR <span className="detail-title-stick"><div>|</div></span> NOVA
                            </div>
                            <div className="col-12 col-md-7 nova-right-col nova-img-component-mobile">
                                <div className="row">
                                    <div className="col-12 nova-main-image">
                                        <img onClick={() => { setShowModal(true); setModalSrc("/nova/ana.jpg") }} width="100%" height="auto" src="/nova/ana.jpg" />
                                    </div>
                                </div>
                                <div className="row nova-detail-image-row">
                                    <div className="col-4">
                                        <div className="nova-detail-image">
                                            <img onClick={() => { setShowModal(true); setModalSrc("/nova/nova2.jpg") }} width="100%" height="auto" src="/nova/nova2.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="nova-detail-image">
                                            <img onClick={() => { setShowModal(true); setModalSrc("/nova/nova1.jpg") }} width="100%" height="auto" src="/nova/nova1.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="nova-detail-image">
                                            <img onClick={() => { setShowModal(true); setModalSrc("/nova/nova3.jpg") }} width="100%" height="auto" src="/nova/nova3.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-sub-title">
                                NOVA<span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Birinci Sınıf Malzeme İle Donatılan Eşsiz Mimariye Sahip Projemizde 2 Adet İşyeri, 2 Adet 3+2 Dubleks, 2 Adet 4+2 Dubleks, 9 Adet 2+1, 3 Adet 3+1 ve 4 Adet 1+1 Dairemiz Bulunmaktadır.
                            </div>
                            <div className="detail-sub-title">
                                NOVA <span className="detail-sub-title-stick"><div>|</div></span> Proje detayları
                            </div>
                            <div className="detail-paragraph">
                                Postacılar Nova Farklı Tiplerdeki Daireleriyle Yaşam ve İhtiyaçlarınıza Hitap Eden Özel Mimari Çözümler Sunmaktadır.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 nova-right-col nova-img-component-desktop">
                        <div className="d-none d-md-block">
                            <div className="row">
                                <div className="col-12 nova-main-image">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/nova/ana.jpg") }} width="100%" height="auto" src="/nova/ana.jpg" />
                                </div>
                            </div>
                            <div className="row nova-detail-image-row">
                                <div className="col-4">
                                    <div className="nova-detail-image">
                                        <img onClick={() => { setShowModal(true); setModalSrc("/nova/nova2.jpg") }} width="100%" height="auto" src="/nova/nova2.jpg" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="nova-detail-image">
                                        <img onClick={() => { setShowModal(true); setModalSrc("/nova/nova1.jpg") }} width="100%" height="auto" src="/nova/nova1.jpg" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="nova-detail-image">
                                        <img onClick={() => { setShowModal(true); setModalSrc("/nova/nova3.jpg") }} width="100%" height="auto" src="/nova/nova3.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row nova-main-image align-items-end justify-content-end">
                            <div className="col-5">
                                <div className="nova-detail-image-bottom-1">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/nova/detay4.jpg") }} width="100%" height="auto" src="/nova/detay4.jpg" />
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="nova-detail-image-bottom-2">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/nova/detay3.jpg") }} width="100%" height="auto" src="/nova/detay3.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="row nova-main-image bottom-part-second-row">
                            <div className="col-7">
                                <div className="nova-detail-image-bottom-3 bottom-left-image">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/nova/detay1.jpg") }} width="100%" height="auto" src="/nova/detay1.jpg" />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="nova-detail-image-bottom-4">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/nova/detay2.jpg") }} width="100%" height="auto" src="/nova/detay2.jpg" />
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