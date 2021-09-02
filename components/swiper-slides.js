import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useState, useEffect, useRef } from 'react';
import ZoomModal from './zoom-modal'
SwiperCore.use([Navigation, Pagination]);
export default function SwiperSlides() {
    const [modalSrc, setModalSrc] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [swiperIns, setSwiperInst] = useState(null);
    // const innerRef = useOuterClick(ev => {ev.stopPropagation();setShowModal(false)});
    const innerRef = useRef(null)
    useOutsideAlerter(innerRef);
    // useEffect(() => {
    //     if (swiperIns) {
    //         swiperIns.on('click', function () {
    //             console.log("anan")
    //             setModalSrc("/2.jpg")
    //             setShowModal(true);
    //         });
    //     }
    // }, [swiperIns])
    return (
        <>
            {showModal && <ZoomModal zoomRef={innerRef} imageSrc={modalSrc} />}
            <div className="swiper-desktop">
                <div className="container">
                    <div className="component-container">
                        <Swiper
                            onSwiper={(swiper) => { setSwiperInst(swiper) }}
                            slidesPerView={3}
                            spaceBetween={10}
                            navigation={true}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide onClick={() => { setShowModal(true); setModalSrc("/1.jpg") }}> <img src="/1.jpg" />   </SwiperSlide>
                            <SwiperSlide onClick={() => { setShowModal(true); setModalSrc("/2.jpg") }}> <img src="/2.jpg" /> </SwiperSlide>
                            <SwiperSlide onClick={() => { setShowModal(true); setModalSrc("/3.jpg") }}> <img src="/3.jpg" /> </SwiperSlide>
                            <SwiperSlide onClick={() => { setShowModal(true); setModalSrc("/4.jpg") }}> <img src="/4.jpg" /> </SwiperSlide>
                            <SwiperSlide onClick={() => { setShowModal(true); setModalSrc("/5.jpg") }}> <img src="/5.jpg" /> </SwiperSlide>
                            <SwiperSlide onClick={() => { setShowModal(true); setModalSrc("/6.jpg") }} > <img src="/6.jpg" /> </SwiperSlide>
                            <SwiperSlide onClick={() => { setShowModal(true); setModalSrc("/7.jpg") }}> <img src="/7.jpg" /> </SwiperSlide>
                            <SwiperSlide onClick={() => { setShowModal(true); setModalSrc("/8.jpg") }}> <img src="/8.jpg" /> </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="swiper-responsive">
                <div className="container">
                    <div className="component-container">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                990: {
                                    spaceBetween: 0,
                                    slidesPerView: 1
                                }
                            }}
                            initialSlide={1}
                        >
                            <SwiperSlide> <img src="/1.jpg" /> </SwiperSlide>
                            <SwiperSlide> <img src="/2.jpg" /> </SwiperSlide>
                            <SwiperSlide> <img src="/3.jpg" /> </SwiperSlide>
                            <SwiperSlide> <img src="/4.jpg" /> </SwiperSlide>
                            <SwiperSlide> <img src="/5.jpg" /> </SwiperSlide>
                            <SwiperSlide> <img src="/6.jpg" /> </SwiperSlide>
                            <SwiperSlide> <img src="/7.jpg" /> </SwiperSlide>
                            <SwiperSlide> <img src="/8.jpg" /> </SwiperSlide>
                        </Swiper>
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
