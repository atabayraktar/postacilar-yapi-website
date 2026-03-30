import React from "react";
import dynamic from "next/dynamic";

export default function ProjectMap({ contactRef }) {
  const Map = dynamic(() => import("./map"), { ssr: false });
  return (
    <>
      <div id="iletisim" ref={contactRef} className="container">
        <div className="desktop-components">
          <div className="component-container-last-item">
            <div className="row">
              <div className="col-6">
                <div className="about-us-title">Proje Alanlarımız</div>
                <div id="map" style={{ height: "400px" }}>
                  <Map />
                </div>
              </div>
              <div className="col-6">
                <div className="about-us-title">İletişim</div>
                <div className="about-us-description">
                  Cep Telefonu: +90 (531) 656 29 09
                </div>
                <div className="about-us-description">
                  Şirket Telefonu: 0286 213 50 55
                </div>
                <br />
                <div className="about-us-description">
                  Şirket Adresi:
                  <br />
                  Namık Kemal Mah. Sakızlı Çeşme Sokak No: 68 Çanakkale / Merkez
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-components">
          <div className="component-container-last-item">
            <div className="img-container">
              <div className="about-us-title">Proje Alanlarımız</div>
            </div>
            <div id="map" style={{ height: "400px" }}>
              <Map />
            </div>
            <div className="about-us-title">İletişim</div>
            <div className="about-us-description">
              Cep Telefonu: +90 (531) 656 29 09
            </div>
            <div className="about-us-description">
              Şirket Telefonu: 0286 213 50 55
            </div>
            <div className="about-us-description">
              Şirket Adresi:
              <br />
              Namık Kemal Mah. Sakızlı Çeşme Sokak No: 68 Çanakkale / Merkez
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
