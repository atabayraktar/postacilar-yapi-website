import Head from 'next/head'
import Header from '../components/detail-header'
export default function () {
    return (
        <>
            <Head>
                <title>POSTACILAR | YAKAMOZ</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="container-fluid detail-container">
                <div className="row">
                    <div className="col-5">
                        <div className="row">
                            <div className="detail-title">
                                postacılar <span className="detail-title-stick"><div>|</div></span> YAKAMOZ
                            </div>
                            <div className="detail-sub-title">
                                YAKAMOZ<span className="detail-sub-title-stick"><div>|</div></span>Hakkında
                            </div>
                            <div className="detail-paragraph">
                                Barbaros Mahallesi 100. yıl caddesinde yer alani Çanakkale'nin göz bebeği yeni kordona ve şehir merkezine yürüyüş mesafesinde, enfes boğaz manzarasına sahip, kendisine ait açık otoparkı bulunanprojemiz 3 adet 3+1 daire, 1 adet 4+1 dublex daire ve 1 dükkandan oluşmaktadır.
                            </div>
                            <div className="detail-sub-title">
                                YAKAMOZ<span className="detail-sub-title-stick"><div>|</div></span>Proje Detayları
                            </div>
                            <div className="detail-paragraph">
                                Daire Sayısı: 4 Daire - 1 Dükkan <br />
                                Daire Tipleri: 3 Adet 3+1 - 1 Adet 4+1 Dublex <br />
                                Manzara: Deniz Manzarası <br />
                                Adres: Barbaros Mah. 100. Yıl Cad. No: 5 Merkez / Çanakkale
                            </div>
                        </div>
                    </div>
                    <div className="col-7 yakamoz-right-col">
                        <div className="row">
                            <div className="col-6 yakamoz-img-1">
                                <img src="/yakamoz/yakamoz2.jpg" />
                            </div>
                            <div className="col-6 yakamoz-img-2">
                                <img src="/yakamoz/yakamoz1.jpg" />
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6 yakamoz-img-3">
                                <img src="/yakamoz/yakamoz4.jpg" />
                            </div>
                            <div className="col-6 yakamoz-img-4">
                                <img src="/yakamoz/yakamoz3.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}