import { useRef } from 'react';
/* eslint-disable */
export default function FlatTypes({ flatRef }) {
    const refx = useRef(null);
    return (
        <>
            <div className="container">
                <div ref={flatRef} className="component-container">
                    <div className="flat-types">
                        Daire Tipleri
                    </div>
                    <div className="row">
                        <div className="col-5 flat-types-sub-header-responsive">
                            "42 adet 3+1 ve 3 adet işyerinden oluşan projemiz"
                        </div>
                        <div className="col-7 flat-type-img-responsive flat-types-img-container1">
                            <img src="/3+1-ara.png" />
                        </div>
                        <div className="flat-type-img-responsive flat-types-img-container">
                            <img src="/3+1-köse.png" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 flat-types-sub-header-desktop">
                            "42 adet 3+1 ve 3 adet işyerinden oluşan projemiz"
                        </div>
                        <div className="col-lg-6 ">
                            <div className="flat-types-img-container1 flat-type-img-desktop">
                                <img src="/3+1-ara.png" />
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="flat-types-img-container flat-type-img-desktop">
                                <img src="/3+1-köse.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}