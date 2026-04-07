import { useApp } from '../context/AppContext';

export default function AboutUs({ aboutUsRef }) {
  const { t } = useApp();
  return (
    <>
      <div id="hakkimizda" ref={aboutUsRef} className="container">
        <div className="desktop-components">
          <div className="component-container">
            <div className="row">
              <div className="col-12">
                <div className="about-us-title">{t('about.title')}</div>
                <div className="about-us-description">
                  {t('about.p1')}<br /><br />{t('about.p2')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-components">
          <div className="component-container">
            <div className="about-us-title">{t('about.title')}</div>
            <div className="about-us-description">
              {t('about.p1')}<br /><br />{t('about.p2')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
