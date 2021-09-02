import { useState, useRef, useEffect } from 'react';
import ZoomModal from './zoom-modal'
/* eslint-disable */
export default function InteriorImgs() {
    const [modalSrc, setModalSrc] = useState("");
    const [showModal, setShowModal] = useState(false);
    const refx = useRef(null);
    useOutsideAlerter(refx);
    return (
        <>
            {showModal && <ZoomModal zoomRef={refx} imageSrc={modalSrc} />}
            <div className="interior-imgs-desktop">
                <div className="container">
                    <div className="component-container">
                        <div className="flat-types-sub-header-desktop">
                            Life'ta hayat <div className="flat-types-sub-header-desktop-stick">|</div> İç Tasarım
                        </div>
                        <div className="row">
                            <div className="col-lg-4 interior-img-1">
                                <img src="/1-mutfak.jpg" onClick={() => { setShowModal(true); setModalSrc("/1-mutfak.jpg") }} />
                            </div>
                            <div className="col-lg-4 interior-imgs">
                                <img src="/2-yatak-odası.jpg" onClick={() => { setShowModal(true); setModalSrc("2-yatak-odası.jpg") }} />
                            </div>
                            <div className="col-lg-4 interior-img-3">
                                <img src="/3-mutfak.jpg" onClick={() => { setShowModal(true); setModalSrc("/3-mutfak.jpg") }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 interior-imgs">
                                <img src="/4-cocuk-odası.jpg" onClick={() => { setShowModal(true); setModalSrc("/4-cocuk-odası.jpg") }} />
                            </div>
                            <div className="col-lg-2 interior-img-5">
                                <img src="/5-banyo.jpg" onClick={() => { setShowModal(true); setModalSrc("/5-banyo.jpg") }} />
                            </div>
                            <div className="col-lg-6 interior-img-6">
                                <img src="/6-antre.jpg" onClick={() => { setShowModal(true); setModalSrc("/6-antre.jpg") }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="interior-imgs-responsive">
                <div className="container">
                    <div className="component-container">
                        <div className="flat-types-header-responsive">
                            Life'ta hayat <div className="flat-types-header-responsive-stick">|</div> İç Tasarım
                        </div>
                        <div className="row">
                            <div className="col-6 interior-imgs">
                                <img src="/1-mutfak.jpg" onClick={() => { setShowModal(true); setModalSrc("/1-mutfak.jpg") }} />
                            </div>
                            <div className="col-6 interior-imgs">
                                <img src="/2-yatak-odası.jpg" onClick={() => { setShowModal(true); setModalSrc("2-yatak-odası.jpg") }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 interior-imgs">
                                <img src="/3-mutfak.jpg" onClick={() => { setShowModal(true); setModalSrc("/3-mutfak.jpg") }} />
                            </div>
                            <div className="col-6 interior-imgs">
                                <img src="/4-cocuk-odası.jpg" onClick={() => { setShowModal(true); setModalSrc("/4-cocuk-odası.jpg") }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 interior-imgs">
                                <img src="/5-banyo.jpg" onClick={() => { setShowModal(true); setModalSrc("/5-banyo.jpg") }} />
                            </div>
                            <div className="col-6 interior-imgs">
                                <img src="/6-antre.jpg" onClick={() => { setShowModal(true); setModalSrc("/6-antre.jpg") }} />
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