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
            <div className="container-fluid nilufer-container">
                <div className="row">
                    <div className="col-5">
                        <div className="row">
                            <div className="detail-title">
                                postacılar <span className="detail-title-stick"><div>|</div></span> nilüfer evleri
                            </div>
                            <div className="detail-sub-title">
                                nilüfer<span className="detail-sub-title-stick"><div>|</div></span>hakkında
                            </div>
                            <div className="detail-paragraph">
                                çanakkale esenler mahallesinde huzur konfor ve rahatlığı sizlerle buluşturan bir proje. Toplam 2 bloktan oluşan, 36 daire, otopark, çocuk oyun parkı
                                ve yeşil alanları bulunan bir projedir. Özenle tasarlanmış ferah daireleri aranılan konforun adresi olmuştur.
                            </div>
                            <div className="detail-sub-title">
                                nilüfer | proje detayları
                            </div>
                            <div className="detail-paragraph">
                                daire sayısı: 36 <br />
                                daire sayısı: 36 <br />
                                daire sayısı: 36 <br />
                                daire sayısı: 36
                            </div>
                        </div>
                    </div>
                    <div className="col-7 nilufer-right-col">
                        <div className="row">
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
                </div>
            </div>
        </>
    )
}