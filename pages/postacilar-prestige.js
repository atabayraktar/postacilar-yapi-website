import Head from 'next/head'
import Header from '../components/detail-header'
import ZoomModal from '../components/zoom-modal'
import { useState, useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default function PostacilarPrestige() {
    const [modalSrc, setModalSrc] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showVModal, setShowVModal] = useState(false);
    const [showMediumModal, setShowMediumModal] = useState(false);

    const refx = useRef(null);
    useOutsideAlerter(refx);

    const projectsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const aboutUsSectionRef = useRef(null)

    return (
        <>
            {showMediumModal && <ZoomModal size="modal-43" zoomRef={refx} imageSrc={modalSrc} />}
            {showVModal && <ZoomModal size="modal-35" zoomRef={refx} imageSrc={modalSrc} />}
            {showModal && <ZoomModal zoomRef={refx} imageSrc={modalSrc} />}
            <Head>
                <title>POSTACILAR | PRESTIGE</title>
                <meta name="description" content="Postacılar Yapı | Prestige Evleri" />
                <link rel="icon" href="/meta-logo.png" />
            </Head>
            <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
            <div className="container-fluid detail-container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="detail-title">
                                POSTACILAR <span className="detail-title-stick"><div>|</div></span>
                                <div className="prestige-logo-big">
                                    <img src="/prestige.png" />
                                </div>
                            </div>
                            <div className="col-12 col-md-7 nova-right-col nova-img-component-mobile">
                                <div className="row">
                                    <div className="col-12 nova-main-image">
                                        <Swiper
                                            modules={[Navigation]}
                                            navigation
                                            spaceBetween={50}
                                            initialSlide={1}
                                            slidesPerView={1}
                                            centeredSlides={true}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                        >

                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/prestige/prestige_slide_1.JPG") }} width="100%" height="auto" src="/prestige/prestige_slide_1.JPG" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/prestige/prestige_slide_2.JPG") }} width="100%" height="auto" src="/prestige/prestige_slide_2.JPG" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/prestige/prestige_slide_3.JPG") }} width="100%" height="auto" src="/prestige/prestige_slide_3.JPG" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/prestige/prestige_slide_4.JPG") }} width="100%" height="auto" src="/prestige/prestige_slide_4.JPG" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-sub-title">
                                <div className="detail-title">
                                    <div className="prestige-logo">
                                        <img src="/prestige.png" />
                                    </div>
                                </div> <span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Prestige şehrin karmaşasından uzak, bir o kadar da şehrin tam kalbinde sıra dışı ayrıntıları konforlu ve güvenli yaşam alanlarıyla tasarlanmış bir proje. Muhteşem deniz manzarası, çocuk oyun alanları, dinlenme alanları, açık kapalı otopark, yeşil bahçe, önemli merkezlere yakınlık, yenilikçi teknoloji ve çevre dostu oluşuyla dikkat çeken bir proje.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 nova-right-col prestige-img-component-desktop">
                        <div className="row" style={{ justifyContent: "center" }}>
                            <div className="col-12 nova-main-image" style={{ width: "450px"}}>
                                <Swiper
                                    modules={[Navigation]}
                                    navigation
                                    spaceBetween={50}
                                    initialSlide={1}
                                    slidesPerView={1}
                                    centeredSlides={true}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/prestige/prestige_slide_1.JPG") }} width="100%" height="auto" src="/prestige/prestige_slide_1.JPG" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/prestige/prestige_slide_2.JPG") }} width="100%" height="auto" src="/prestige/prestige_slide_2.JPG" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/prestige/prestige_slide_3.JPG") }} width="100%" height="auto" src="/prestige/prestige_slide_3.JPG" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/prestige/prestige_slide_4.JPG") }} width="100%" height="auto" src="/prestige/prestige_slide_4.JPG" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="detail-sub-title">
                            <div className="detail-title">
                                <div className="prestige-logo">
                                    <img src="/prestige.png" />
                                </div>
                            </div>  <span className="detail-sub-title-stick"><div>|</div></span> Proje detayları
                        </div>
                        <div className="detail-paragraph">
                            Daire Sayısı: 28 <br />
                            Daire Tipİ: 3+1 <br />
                            İşyeri Sayısı: 3 <br />
                            Manzara: Deniz Manzarası <br />
                            Doğa Manzarası, Şehir Manzarası <br />
                            Adres: Boğazkent Mah. Seyit Onbaşı <br />Cad. No:19 Kepez / Çanakkale
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="detail-sub-title">
                            <div className="detail-title">
                                <div className="prestige-logo">
                                    <img src="/prestige.png" />
                                </div>
                            </div>  <span className="detail-sub-title-stick"><div>|</div></span>iç tasarım
                        </div>
                        <div className="images zoomable-img">
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
                            <div className="row prestige-bottom-part-second-row mb-5" style={{ justifyContent: "flex-end" }}>
                                <div className="col-7 col-md-3">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres4.jpg") }} width="100%" height="auto" src="/prestige/pres4.jpg" />
                                </div>
                                <div className="col-5 mt-3 mt-md-0 col-md-2">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres5.jpg") }} width="100%" height="auto" src="/prestige/pres5.jpg" />
                                </div>
                                <div className="col-7 mt-3 mt-md-0 col-md-5">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/prestige/pres6.jpg") }} width="100%" height="auto" src="/prestige/pres6.jpg" />
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
                    setShowMediumModal(false);
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