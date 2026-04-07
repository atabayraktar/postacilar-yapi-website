import { useApp } from '../context/AppContext';

export default function Icons() {
  const { t } = useApp();
  return (
    <>
      <div className="container">
        <div className="desktop-components">
          <div className="component-container">
            <div className="row icons">
              <div className="col-3 icons-centered"><div className="about-us-logo"><img src="/logo-1.webp" /></div></div>
              <div className="col-3 icons-centered"><div className="about-us-logo"><img src="/logo-2.webp" /></div></div>
              <div className="col-3 icons-centered"><div className="about-us-logo"><img src="/logo-3.webp" /></div></div>
              <div className="col-3 icons-centered"><div className="about-us-logo"><img src="/logo-4.webp" /></div></div>
            </div>
            <div className="row icons-description">
              <div className="col-3 icons-centered"><div className="about-us-logo-description">{t('icons.item1line1')}<br/>{t('icons.item1line2')}</div></div>
              <div className="col-3 icons-centered"><div className="about-us-logo-description">{t('icons.item2line1')}<br/>{t('icons.item2line2')}</div></div>
              <div className="col-3 icons-centered"><div className="about-us-logo-description">{t('icons.item3line1')}<br/>{t('icons.item3line2')}</div></div>
              <div className="col-3 icons-centered"><div className="about-us-logo-description">{t('icons.item4line1')}<br/>{t('icons.item4line2')}</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mobile-components">
          <div className="component-container">
            <div className="row icons">
              <div className="col-6 icons-centered"><div className="about-us-logo"><img src="/logo-1.webp" /></div></div>
              <div className="col-6 icons-centered"><div className="about-us-logo"><img src="/logo-2.webp" /></div></div>
            </div>
            <div className="row icons-description">
              <div className="col-6 icons-centered"><div className="about-us-logo-description">{t('icons.item1line1')}<br/>{t('icons.item1line2')}</div></div>
              <div className="col-6 icons-centered"><div className="about-us-logo-description">{t('icons.item2line1')}<br/>{t('icons.item2line2')}</div></div>
            </div>
            <div className="row icons">
              <div className="col-6 icons-centered"><div className="about-us-logo"><img src="/logo-3.webp" /></div></div>
              <div className="col-6 icons-centered"><div className="about-us-logo"><img src="/logo-4.webp" /></div></div>
            </div>
            <div className="row icons-description">
              <div className="col-6 icons-centered"><div className="about-us-logo-description">{t('icons.item3line1')}<br/>{t('icons.item3line2')}</div></div>
              <div className="col-6 icons-centered"><div className="about-us-logo-description">{t('icons.item4line1')}<br/>{t('icons.item4line2')}</div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
