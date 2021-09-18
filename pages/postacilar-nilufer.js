import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/detail-header'
export default function () {
    return (
        <>
            <Head>
                <title>POSTACILAR | NİLÜFER</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="container-fluid detail-container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="row">
                            <div className="detail-title">
                                postacılar <span className="detail-title-stick"><div>|</div></span> nilüfer evleri
                            </div>
                            <div className="detail-sub-title">
                                NİLÜFER<span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Çanakkale Esenler Mahallesinde Huzur, Konfor ve Rahatlığı sizlerle buluşturan bir proje. Toplam 2 bloktan oluşan, 36 daire, otopark, çocuk oyun parkı
                                ve yeşil alanları bulunan bir projedir. Özenle tasarlanmış ferah daireleri aranılan konforun adresi olmuştur.
                            </div>
                            <div className="detail-sub-title">
                            NİLÜFER <span className="detail-sub-title-stick"><div>|</div></span> Proje detayları
                            </div>
                            <div className="detail-paragraph">
                                Daire Sayısı: 36 <br />
                                Daire Tipleri: 24 Adet 3+1 & 12 Adet 2+1 <br />
                                Adres: Esenler Mahallesi Okulyolu <br />
                                sokak Merkez / ÇANAKKALE
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-12 col-md-7 nilufer-right-col">
                        <div className="row mb-5 mb-md-0">
                            <div className="col-6 nilufer-left-image">
                                <img width="60%" height="auto" src="/nilufer/nilufer2.jpg" />
                            </div>
                            <div className="col-6">
                                <div className="nilufer-right-top-image">
                                    <img width="90%" height="auto" src="/nilufer/nilufer1.jpg" />
                                </div>
                                <div>
                                    <img width="70%" height="auto" src="/nilufer/nilufer3.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-md-none col-12 col-md-7 nilufer-right-col">
                        <div className="row mb-5 mb-md-0">
                            <div className="col-6 nilufer-left-image">
                                <img width="100%" height="auto" src="/nilufer/nilufer2.jpg" />
                            </div>
                            <div className="col-6">
                                <div className="nilufer-right-top-image">
                                    <img width="100%" height="auto" src="/nilufer/nilufer1.jpg" />
                                </div>
                                <div>
                                    <img width="80%" height="auto" src="/nilufer/nilufer3.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}