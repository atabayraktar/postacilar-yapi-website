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
                <span className="project-badge">{t('projects.badge')}</span>
                <Link href="/postacilar-life">
                  <a>
                    <img src="/homepage-rectangle-images/life-1.webp" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">{t('projects.badge')}</span>
                <Link href="/postacilar-life2">
                  <a>
                    <img src="/homepage-rectangle-images/life-2.webp" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-nova">
                  <a>
                    <img src="/homepage-rectangle-images/nova.webp" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-prestige">
                  <a>
                    <img src="/homepage-rectangle-images/prestige.webp" />
                  </a>
                </Link>
              </div>
              {/* <div className="col-3 img-container-projects">
                                <div className="fadding-photo">
                                    <Link href="/postacilar-nova">
                                        <a>
                                            <img src="/nova/nova_slides_1.webp" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="img-container-projects-bottom fadding-photo">
                                    <Link href="/postacilar-prestige">
                                        <a>
                                            <img src="/prestige/prestige_slide_2.webp" />
                                        </a>
                                    </Link>
                                </div> */}
              {/* </div> */}
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
          <div className="component-container">
            <div className="about-us-title">{t('projects.title')}</div>
            <div className="row">
              <div className="col-3 img-container-main-project fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">{t('projects.badge')}</span>
                <Link href="/postacilar-life">
                  <a>
                    <img src="/homepage-rectangle-images/life-1.webp" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">{t('projects.badge')}</span>
                <Link href="/postacilar-life">
                  <a>
                    <img src="/homepage-rectangle-images/life-2.webp" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-nova">
                  <a>
                    <img src="/homepage-rectangle-images/nova.webp" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-prestige">
                  <a>
                    <img src="/homepage-rectangle-images/prestige.webp" />
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
