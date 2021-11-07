import Head from 'next/head'
import Header from '../components/detail-header'
import ZoomModal from '../components/zoom-modal'
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

export default function PostacilarNova() {
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
            {showVModal && <ZoomModal verticalImage={true} zoomRef={refx} imageSrc={modalSrc} />}
            {showModal && <ZoomModal zoomRef={refx} imageSrc={modalSrc} />}

            <Head>
                <title>POSTACILAR | NOVA</title>
                <meta name="description" content="Postacılar Yapı | Nova Evleri" />
                <link rel="icon" href="/meta-logo.png" />
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
                                            <SwiperSlide>
                                                <img onClick={() => { setShowModal(true); setModalSrc("/nova/nova_slide_1.jpg") }} width="100%" height="auto" src="/nova/nova_slide_1.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img onClick={() => { setShowModal(true); setModalSrc("/nova/nova_slide_2.jpg") }} width="100%" height="auto" src="/nova/nova_slide_2.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img onClick={() => { setShowModal(true); setModalSrc("/nova/nova_slide_3.jpg") }} width="100%" height="auto" src="/nova/nova_slide_3.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img onClick={() => { setShowVModal(true); setModalSrc("/nova/nova1.jpg") }} width="100%" height="auto" src="/nova/nova1.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img onClick={() => { setShowVModal(true); setModalSrc("/nova/nova2.jpg") }} width="100%" height="auto" src="/nova/nova2.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img onClick={() => { setShowVModal(true); setModalSrc("/nova/nova3.jpg") }} width="100%" height="auto" src="/nova/nova3.jpg" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-sub-title">
                                NOVA<span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Postacılar yapının bölgedeki üçüncü projesi olan nova gelişen şehrin ilerleyişi doğrultusunda konumlanmış,
                                firma ilkelerimizden olan konforlu ve güvenli yaşam alanları tasarlama prensibimize sahip aynı zamanda
                                deniz manzarası ve yakınındaki parklar ile şehir ve doğa ilişkisini sevenlere hitabeden bir apartman projesidir.
                            </div>
                            <div className="detail-sub-title">
                                NOVA <span className="detail-sub-title-stick"><div>|</div></span> Proje detayları
                            </div>
                            <div className="detail-paragraph">
                                Postacılar nova  çeşitli daire tiplerine sahip bir projedir.<br />
                                2 adet 3+2 dubleks<br />
                                2 adet 4+2 dubleks<br />
                                9 adet 2+1<br />
                                3 adet 3+1<br />
                                4 adet 1+1<br />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 nova-right-col nova-img-component-desktop">
                        <div className="d-none d-md-block">
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
                                        <SwiperSlide>
                                            <img onClick={() => { setShowVModal(true); setModalSrc("/nova/nova_slide_1.jpg") }} width="100%" height="auto" src="/nova/nova_slide_1.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={() => { setShowVModal(true); setModalSrc("/nova/nova_slide_2.jpg") }} width="100%" height="auto" src="/nova/nova_slide_2.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={() => { setShowVModal(true); setModalSrc("/nova/nova_slide_3.jpg") }} width="100%" height="auto" src="/nova/nova_slide_3.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={() => { setShowVModal(true); setModalSrc("/nova/nova1.jpg") }} width="100%" height="auto" src="/nova/nova1.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={() => { setShowVModal(true); setModalSrc("/nova/nova2.jpg") }} width="100%" height="auto" src="/nova/nova2.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img onClick={() => { setShowVModal(true); setModalSrc("/nova/nova3.jpg") }} width="100%" height="auto" src="/nova/nova3.jpg" />
                                        </SwiperSlide>
                                    </Swiper>
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