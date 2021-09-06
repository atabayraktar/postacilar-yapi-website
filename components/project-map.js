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
                                    "Lorem dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                            "Lorem dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}