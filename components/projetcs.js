import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useApp } from '../context/AppContext';

export default function Projects({ projectsRef }) {
  const router = useRouter();
  const { t } = useApp();
  return (
    <>
      <div id="projeler" ref={projectsRef} className="container">
        <div className="desktop-components">
          <div className="component-container">
            <div className="about-us-title">{t('projects.title')}</div>
            <div className="row">
              <div className="col-3 img-container-main-project fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">SATIŞI DEVAM EDİYOR</span>
                <Link href="/postacilar-life2">
                  <a aria-label="Postacılar Life 2 projesini incele">
                    <img src="/homepage-projects/life-2.webp" loading="lazy" decoding="async" alt="Postacılar Life 2 konut projesi dış cephe görünümü" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">SATIŞI DEVAM EDİYOR</span>
                <Link href="/postacilar-life">
                  <a aria-label="Postacılar Life projesini incele">
                    <img src="/homepage-projects/life-1.webp" loading="lazy" decoding="async" alt="Postacılar Life konut projesi dış cephe görünümü" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-nova">
                  <a aria-label="Postacılar Nova projesini incele">
                    <img src="/homepage-projects/nova.webp" loading="lazy" decoding="async" alt="Postacılar Nova konut projesi dış cephe görünümü" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-prestige">
                  <a aria-label="Postacılar Prestige projesini incele">
                    <img src="/homepage-projects/prestige.webp" loading="lazy" decoding="async" alt="Postacılar Prestige konut projesi dış cephe görünümü" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="view-more-button">
              <Link href="/projelerimiz">
                <a>
                  <Button className="color-nav" variant="dark" size="lg">
                    {t('projects.viewAll')}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-components">
          <div className="component-container" style={{paddingLeft:"24px", paddingRight:"24px"}}>
            <div className="about-us-title">{t('projects.title')}</div>
            <div className="row">
              <div className="col-3 img-container-main-project fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">SATIŞTA</span>
                <Link href="/postacilar-life2">
                  <a aria-label="Postacılar Life 2 projesini incele">
                    <img src="/homepage-projects/life-2.webp" loading="lazy" decoding="async" alt="Postacılar Life 2 konut projesi dış cephe görünümü" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">SATIŞTA</span>
                <Link href="/postacilar-life">
                  <a aria-label="Postacılar Life projesini incele">
                    <img src="/homepage-projects/life-1.webp" loading="lazy" decoding="async" alt="Postacılar Life konut projesi dış cephe görünümü" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-nova">
                  <a aria-label="Postacılar Nova projesini incele">
                    <img src="/homepage-projects/nova.webp" loading="lazy" decoding="async" alt="Postacılar Nova konut projesi dış cephe görünümü" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-prestige">
                  <a aria-label="Postacılar Prestige projesini incele">
                    <img src="/homepage-projects/prestige.webp" loading="lazy" decoding="async" alt="Postacılar Prestige konut projesi dış cephe görünümü" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="view-more-button">
              <Button
                onClick={() => router.push("/projelerimiz")}
                variant="dark"
                size="lg"
              >
                {t('projects.viewAll')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
