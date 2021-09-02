export default function Contact({ contactRef }) {

    return (
        <>
            <div ref={contactRef} className="container">
                <div className="component-container-last-item">
                    <div className="contact">
                        İletişim & Ulaşım
                    </div>
                    <div className="row">
                        <div className="col-lg-6 contact-sub-header">
                            <div >
                                Cep Telefonu: +90 (532) 272 04 15
                            </div>
                            <div>
                                Şirket Telefonu: 0286 213 50 55
                            </div>
                            <div className="contact-responsive-address">
                                Proje Adresi: Esenler Mahallesi, Şehit Ömer Halis Demir Caddesi, No: 18/2, Çanakkale/Merkez
                            </div>
                        </div>
                        <div className="col-lg-6 contact-sub-header-address">
                            Proje Adresi: Esenler Mahallesi, Şehit Ömer Halis Demir Caddesi, No: 18/2, Çanakkale/Merkez
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}