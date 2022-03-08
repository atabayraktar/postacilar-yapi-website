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
                <title>POSTACILAR | LIFE 2</title>
                <meta name="description" content="Postacılar Yapı | Life 2 Evleri" />
                <link rel="icon" href="/meta-logo.png" />
            </Head>
            <Header refs={[projectsSectionRef, contactSectionRef, aboutUsSectionRef]} />
            <div className="container-fluid detail-container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="detail-title">
                                <div className="postacilar-life-logo">
                                    <img src="/life2/postacilar-life2-logo.png" />
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
                                            <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/1.jpg") }} width="100%" height="auto" src="/life2/outside/1.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/2.jpg") }} width="100%" height="auto" src="/life2/outside/2.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/3.jpg") }} width="100%" height="auto" src="/life2/outside/3.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/4.jpg") }} width="100%" height="auto" src="/life2/outside/4.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/5.jpg") }} width="100%" height="auto" src="/life2/outside/5.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/6.jpg") }} width="100%" height="auto" src="/life2/outside/6.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/7.jpg") }} width="100%" height="auto" src="/life2/outside/7.jpg" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-sub-title">
                                <div className="detail-title">
                                    <div className="prestige-logo">
                                        <img src="/life2/life2-logo.png" />
                                    </div>
                                </div> <span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Esenler mahallesinin Gazi Meclis Caddesinde konumlanan projemiz Postacılar Life projelerinin ikinci etabıdır. Çanakkale Belediyesi’nin şehir planında bulunan park alanının yanında konumlanan yapı, kendine ait geniş peyzaj alanına sahiptir. Kullanıcılarına en iyisini vermeyi amaçlayan projede modern mimari ve iç tasarımın yanı sıra her dairenin kendine ait kapalı otopark alanı bulunmaktadır.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 nova-right-col prestige-img-component-desktop">
                        <div className="row" style={{ justifyContent: "center" }}>
                            <div className="col-8 nova-main-image" >
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
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/1.jpg") }} width="100%" height="auto" src="/life2/outside/1.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/2.jpg") }} width="100%" height="auto" src="/life2/outside/2.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/3.jpg") }} width="100%" height="auto" src="/life2/outside/3.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/4.jpg") }} width="100%" height="auto" src="/life2/outside/4.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/5.jpg") }} width="100%" height="auto" src="/life2/outside/5.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/6.jpg") }} width="100%" height="auto" src="/life2/outside/6.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/outside/7.jpg") }} width="100%" height="auto" src="/life2/outside/7.jpg" />
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
                                    <img src="/life2/life2-logo.png" />
                                </div>
                            </div>  <span className="detail-sub-title-stick"><div>|</div></span> Proje detayları
                        </div>
                        <div className="detail-paragraph">
                            Daire Sayısı: 42 adet <br />
                            Daire Tipler: 14 adet 3+1, 14 adet 2+1 kapalı mutfak, 14 adet 2+1 açık mutfak  <br />
                            İşyeri Sayısı: 2 <br />
                            Adres: Esenler Mahallesi, Gazi Meclis Caddesi, No: 12 Esenler Çanakkale/Merkez
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="life2-container-mobile">
                            <div className="detail-sub-title">
                                <div className="detail-title">
                                    <div className="prestige-logo">
                                        <img src="/life2/life2-logo.png" />
                                    </div>
                                </div>  <span className="detail-sub-title-stick"><div>|</div></span>İç tasarım
                            </div>
                            <div className='life2-swiper-desktop'>
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
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/1.jpg") }} width="100%" height="auto" src="/life2/inside/1.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/2.jpg") }} width="100%" height="auto" src="/life2/inside/2.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/3.jpg") }} width="100%" height="auto" src="/life2/inside/3.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/4.jpg") }} width="100%" height="auto" src="/life2/inside/4.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/5.jpg") }} width="100%" height="auto" src="/life2/inside/5.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/6.jpg") }} width="100%" height="auto" src="/life2/inside/6.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/7.jpg") }} width="100%" height="auto" src="/life2/inside/7.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/8.jpg") }} width="100%" height="auto" src="/life2/inside/8.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/9.jpg") }} width="100%" height="auto" src="/life2/inside/9.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/10.jpg") }} width="100%" height="auto" src="/life2/inside/10.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/11.jpg") }} width="100%" height="auto" src="/life2/inside/11.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/12.jpg") }} width="100%" height="auto" src="/life2/inside/12.jpg" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="life2-container-desktop">
                            <div className="detail-sub-title">
                                <div className="detail-title">
                                    <div className="prestige-logo">
                                        <img src="/life2/life2-logo.png" />
                                    </div>
                                </div>  <span className="detail-sub-title-stick"><div>|</div></span>İç tasarım
                            </div>
                            <div className='life2-swiper-desktop'>
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
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/1.jpg") }} width="100%" height="auto" src="/life2/inside/1.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/2.jpg") }} width="100%" height="auto" src="/life2/inside/2.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/3.jpg") }} width="100%" height="auto" src="/life2/inside/3.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/4.jpg") }} width="100%" height="auto" src="/life2/inside/4.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/5.jpg") }} width="100%" height="auto" src="/life2/inside/5.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/6.jpg") }} width="100%" height="auto" src="/life2/inside/6.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/7.jpg") }} width="100%" height="auto" src="/life2/inside/7.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/8.jpg") }} width="100%" height="auto" src="/life2/inside/8.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/9.jpg") }} width="100%" height="auto" src="/life2/inside/9.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/10.jpg") }} width="100%" height="auto" src="/life2/inside/10.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/11.jpg") }} width="100%" height="auto" src="/life2/inside/11.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide><img onClick={() => { setShowMediumModal(true); setModalSrc("/life2/inside/12.jpg") }} width="100%" height="auto" src="/life2/inside/12.jpg" />
                                    </SwiperSlide>
                                </Swiper>
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