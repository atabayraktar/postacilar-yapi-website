export default function AboutUs({ aboutUsRef }) {

    return (
        <>
            {/* <div id="hakkimizda" ref={aboutUsRef} className="container">
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
            </div> */}
            <div id="hakkimizda" ref={aboutUsRef} className="container">
                <div className="desktop-components">
                    <div className="component-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="about-us-title">
                                    Hakkımızda
                                </div>
                                <div className="about-us-description">
                                    Postacılar Yapı, Çanakkale’de 30 yılı aşkın ticari geçmişi olan Postacılar firmasının inşaat markasıdır. 2011 yılından bu yana inşaat faaliyetlerine devam etmekte olan Postacılar Yapı, Çanakkale’de yeni ve büyük projelere imza atmaya devam etmektedir.
                                    <br />
                                    Gerçekleştirdiği projelerde kullanıcı odaklı ve doğa dostu yapılar üretmeyi amaçlayan firma aynı zamanda ürettiği yapıların kullanıcıları için her zaman en iyisi olmasını amaçlamaktadır. İnşaat kalitesi, işçiliği, proje bazında sunduğu imkanları, inşaat alanlarının seçiminde gösterdiği özen ve projelendirme aşamasına verdiği önem ile güvenilir projelere imza atmaktadır.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-components">
                    <div className="component-container">
                        <div className="about-us-title">
                            Hakkımızda
                        </div>
                        <div className="about-us-description">
                            Postacılar Yapı, Çanakkale’de 30 yılı aşkın ticari geçmişi olan Postacılar firmasının inşaat markasıdır. 2011 yılından bu yana inşaat faaliyetlerine devam etmekte olan Postacılar Yapı, Çanakkale’de yeni ve büyük projelere imza atmaya devam etmektedir.
                            <br />
                            <br />
                            Gerçekleştirdiği projelerde kullanıcı odaklı ve doğa dostu yapılar üretmeyi amaçlayan firma aynı zamanda ürettiği yapıların kullanıcıları için her zaman en iyisi olmasını amaçlamaktadır. İnşaat kalitesi, işçiliği, proje bazında sunduğu imkanları, inşaat alanlarının seçiminde gösterdiği özen ve projelendirme aşamasına verdiği önem ile güvenilir projelere imza atmaktadır.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}