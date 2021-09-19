import Head from 'next/head'
import Header from '../components/detail-header'
import ZoomModal from '../components/zoom-modal'
import { useState, useRef, useEffect } from 'react';

export default function PostacilarPrestige() {
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
                <title>POSTACILAR | PRESTIGE</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
            <div className="container-fluid detail-container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="detail-title">
                                PRESTIGE
                            </div>
                            <div className="col-12 col-md-7 nova-right-col nova-img-component-mobile">
                                <div className="row">
                                    <div className="col-12 nova-main-image">
                                        <img onClick={() => { setShowModal(true); setModalSrc("/nova/ana.jpg") }} width="100%" height="auto" src="/nova/ana.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="detail-sub-title">
                                PRESTIGE <span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Prestige şehrin karmaşasından uzak, bir o kadar da şehrin tam kalbinde sıra dışı ayrıntıları konforlu ve güvenli yaşam alanlarıyla tasarlanmış bir proje. Muhteşem deniz manzarası, çocuk oyun alanları, dinlenme alanları, açık kapalı otopark, yeşil bahçe, önemli merkezlere yakınlık, yenilikçi teknoloji ve çevre dostu oluşuyla dikkat çeken bir proje.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 nova-right-col prestige-img-component-desktop">
                        <div className="row">
                            <div className="col-12 nova-main-image">
                                <img onClick={() => { setShowModal(true); setModalSrc("/nova/ana.jpg") }} width="100%" height="auto" src="/nova/ana.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="detail-sub-title">
                            PRESTIGE <span className="detail-sub-title-stick"><div>|</div></span> Proje detayları
                            </div>
                        <div className="detail-paragraph">
                            Daire Sayısı: 28 <br />
                                Daire Tipİ: 3+1 <br />
                                İşyeri Sayısı: 3 <br />
                                Manzara: Deniz Manzarası <br />
                                Doğa Manzarası, Şehir Manzarası <br />
                                Adres: Boğazkent Mah. Seyit Onbaşı <br />Cad. No:19 Kepez / Çanakkale
                            </div>
                        <div className="detail-sub-title">
                            PRESTIGE <span className="detail-sub-title-stick"><div>|</div></span> Proje Alanı
                            </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="detail-sub-title">
                            PRESTIGE <span className="detail-sub-title-stick"><div>|</div></span>iç tasarım
                            </div>
                        <div className="images">
                            <div className="row align-items-end">
                                <div className="col-12 col-md-5">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres1.jpg") }} width="100%" height="auto" src="/prestige/pres1.jpg" />
                                </div>
                                <div className="col-6 mt-3 mt-md-0 col-md-4">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres2.jpg") }} width="100%" height="auto" src="/prestige/pres2.jpg" />

                                </div>
                                <div className="col-5 mt-3 mt-md-0 col-md-3">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres3.jpg") }} width="100%" height="auto" src="/prestige/pres3.jpg" />

                                </div>
                            </div>
                            <div className="row prestige-bottom-part-second-row mb-5">
                                <div className="col-7 col-md-3">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres1.jpg") }} width="100%" height="auto" src="/prestige/pres1.jpg" />

                                </div>
                                <div className="col-5 col-md-2">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres1.jpg") }} width="100%" height="auto" src="/prestige/pres1.jpg" />

                                </div>
                                <div className="col-5 mt-3 mt-md-0 col-md-2">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres1.jpg") }} width="100%" height="auto" src="/prestige/pres1.jpg" />

                                </div>
                                <div className="col-7 mt-3 mt-md-0 col-md-5">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres1.jpg") }} width="100%" height="auto" src="/prestige/pres1.jpg" />

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