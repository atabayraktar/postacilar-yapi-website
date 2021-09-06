export default function ProjectMap({ contactRef }) {

    return (
        <>
            <div ref={contactRef} className="container">
                <div className="desktop-components">
                    <div className="component-container-last-item">
                        <div className="row">
                            <div className="col-6 img-container">
                                <div className="about-us-title">
                                    Proje Alanlarımız
                                </div>
                                <img src="/1.jpg" />
                            </div>
                            <div className="col-6">
                                <div className="about-us-title">
                                    İletişim
                                </div>
                                <div className="about-us-description">
                                    Cep Telefonu: +90 (532) 272 04 15
                                </div>
                                <div className="about-us-description">
                                    Şirket Telefonu: 0286 213 50 55
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-components">
                    <div className="component-container-last-item">
                        <div className="img-container">
                            <div className="about-us-title">
                                Proje Alanlarımız
                            </div>
                            <img src="/1.jpg" />
                        </div>
                        <div className="about-us-title">
                            İletişim
                        </div>
                        <div className="about-us-description">
                            Cep Telefonu: +90 (532) 272 04 15
                        </div>
                        <div className="about-us-description">
                            Şirket Telefonu: 0286 213 50 55
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}