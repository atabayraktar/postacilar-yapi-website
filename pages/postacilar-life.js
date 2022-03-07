import Head from 'next/head'
import Header from '../components/detail-header'
import ZoomModal from '../components/zoom-modal'
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

export default function PostacilarLife() {
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
            {showMediumModal && <ZoomModal size="modal" zoomRef={refx} imageSrc={modalSrc} />}
            {showVModal && <ZoomModal size="modal-35" zoomRef={refx} imageSrc={modalSrc} />}
            {showModal && <ZoomModal zoomRef={refx} imageSrc={modalSrc} />}
            <Head>
                <title>POSTACILAR | LIFE</title>
                <meta name="description" content="Postacılar Yapı | Life Evleri" />
                <link rel="icon" href="/meta-logo.png" />
            </Head>
            <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
            <div className="container-fluid detail-container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="detail-title">
                                <div className="postacilar-life-logo">
                                    <img src="/life/postacılar-life-logo.png" />
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
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/life/1.jpg") }} width="100%" height="auto" src="/life/1.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/life/2.jpg") }} width="100%" height="auto" src="/life/2.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/life/3.jpg") }} width="100%" height="auto" src="/life/3.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/life/4.jpg") }} width="100%" height="auto" src="/life/4.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/life/5.jpg") }} width="100%" height="auto" src="/life/5.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/life/6.jpg") }} width="100%" height="auto" src="/life/6.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/life/7.jpg") }} width="100%" height="auto" src="/life/7.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowModal(true); setModalSrc("/life/8.jpg") }} width="100%" height="auto" src="/life/8.jpg" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-sub-title">
                                <div className="detail-title">
                                    <div className="prestige-logo">
                                        <img src="/life/life-logo.png" />
                                    </div>
                                </div> <span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Postacılar Life esenler mahallesinde konumlanan projemizdir. Postacılar Life 60 metrelik yol olarak adlandırılan bölgede şirketimiz bünyesinde gerçekleştirilen ilk projesidir. Kullanıcılarına en iyisini vermeyi amaçlayan projede modern mimari ve iç tasarımın yanı sıra her dairenin kendine ait kapalı otopark alanı bulunmaktadır.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 nova-right-col prestige-img-component-desktop">
                        <div className="row" style={{ justifyContent: "center" }}>
                            <div className="col-12 nova-main-image" style={{ width: "650px" }}>
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
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life/1.jpg") }} width="100%" height="auto" src="/life/1.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life/2.jpg") }} width="100%" height="auto" src="/life/2.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life/3.jpg") }} width="100%" height="auto" src="/life/3.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life/4.jpg") }} width="100%" height="auto" src="/life/4.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life/5.jpg") }} width="100%" height="auto" src="/life/5.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life/6.jpg") }} width="100%" height="auto" src="/life/6.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life/7.jpg") }} width="100%" height="auto" src="/life/7.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life/8.jpg") }} width="100%" height="auto" src="/life/8.jpg" />
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
                                    <img src="/life/life-logo.png" />
                                </div>
                            </div>  <span className="detail-sub-title-stick"><div>|</div></span> Proje detayları
                        </div>
                        <div className="detail-paragraph">
                            Daire Sayısı: 42 adet <br />
                            Daire Tipi: 3+1 <br />
                            İşyeri Sayısı: 3 <br />
                            Adres: Esenler Mahallesi, Şehit Ömer <br />
                            Halis Demir Caddesi, No: 18/2, Çanakkale/Merkez<br />
                        </div>
                        <div className="detail-sub-title flat">
                            <div className="detail-title">
                                <div className="prestige-logo">
                                    <img src="/life/life-logo.png" />
                                </div>
                            </div>  <span className="detail-sub-title-stick"><div>|</div></span> Daire Tipleri
                        </div>
                        <div className="flat-types">
                            <div className="corner">
                                <img onClick={() => { setShowVModal(true); setModalSrc("/life/3+1-ara.png") }} src="/life/3+1-ara.png" />
                            </div>
                            <div className="corner responsive">
                                <img onClick={() => { setShowModal(true); setModalSrc("/life/3+1-ara.png") }} src="/life/3+1-ara.png" />
                            </div>
                            <div className="middle">
                                <img onClick={() => { setShowModal(true); setModalSrc("/life/3+1-köse.png") }} src="/life/3+1-köse.png" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="detail-sub-title">
                            <div className="detail-title">
                                <div className="prestige-logo">
                                    <img src="/life/life-logo.png" />
                                </div>
                            </div>  <span className="detail-sub-title-stick"><div>|</div></span>İç tasarım
                        </div>
                        <div className="images zoomable-img">
                            <div className="row align-items-end">
                                <div className="col-12 col-md-4">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/life/1-mutfak.jpg") }} width="100%" height="auto" src="/life/1-mutfak.jpg" />
                                </div>
                                <div className="col-6 mt-3 mt-md-0 col-md-5">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/life/2-yatak-odası.jpg") }} width="100%" height="auto" src="/life/2-yatak-odası.jpg" />
                                </div>
                                <div className="col-6 mt-3 mt-md-0 col-md-3">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/life/3-mutfak.jpg") }} width="100%" height="auto" src="/life/3-mutfak.jpg" />
                                </div>
                            </div>
                            <div className="row prestige-bottom-part-second-row mb-5" style={{ justifyContent: "flex-end" }}>
                                <div className="col-6 mt-3 mt-md-0 col-md-4">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/life/4-cocuk-odası.jpg") }} width="100%" height="auto" src="/life/4-cocuk-odası.jpg" />
                                </div>
                                <div className="col-6 mt-3 mt-md-0 col-md-3">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/life/5-banyo.jpg") }} width="100%" height="auto" src="/life/5-banyo.jpg" />
                                </div>
                                <div className="col-6 mt-3 mt-md-0 col-md-4">
                                    <img onClick={() => { setShowModal(true); setModalSrc("/life/6-antre.jpg") }} width="100%" height="auto" src="/life/6-antre.jpg" />
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