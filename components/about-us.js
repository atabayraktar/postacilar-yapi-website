export default function AboutUs({ aboutUsRef }) {

    return (
        <>
            <div ref={aboutUsRef} className="container">
                <div className="desktop-components">
                    <div className="component-container">
                        <div className="row">
                            <div className="col-5">
                                <div className="about-us-title">
                                    Hakkımızda
                                </div>
                                <div className="about-us-description">
                                    "Lorem dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </div>
                            </div>
                            <div className="col-7 img-container">
                                <img src="/1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-components">
                    <div className="component-container">
                        <div className="about-us-title">
                            Hakkımızda
                        </div>
                        <div className="img-container">
                            <img src="/1.jpg" />
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