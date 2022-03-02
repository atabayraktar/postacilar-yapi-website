import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Projects({ projectsRef }) {
  const router = useRouter();
  return (
    <>
      <div id="projeler" ref={projectsRef} className="container">
        <div className="desktop-components">
          <div className="component-container">
            <div className="about-us-title">Projelerimiz</div>
            <div className="row">
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/hpostacilar-life">
                  <a>
                    <img src="/homepage-rectangle-images/life-1.jpg" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-life">
                  <a>
                    <img src="/homepage-rectangle-images/life-2.jpg" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-nova">
                  <a>
                    <img src="/homepage-rectangle-images/nova.jpg" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-prestige">
                  <a>
                    <img src="/homepage-rectangle-images/prestige.jpg" />
                  </a>
                </Link>
              </div>
              {/* <div className="col-3 img-container-projects">
                                <div className="fadding-photo">
                                    <Link href="/postacilar-nova">
                                        <a>
                                            <img src="/nova/nova_slides_1.jpg" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="img-container-projects-bottom fadding-photo">
                                    <Link href="/postacilar-prestige">
                                        <a>
                                            <img src="/prestige/prestige_slide_2.JPG" />
                                        </a>
                                    </Link>
                                </div> */}
              {/* </div> */}
            </div>
            <div className="view-more-button">
              <Link href="/projelerimiz">
                <a>
                  <Button className="color-nav" variant="dark" size="lg">
                    Diğer Projelerimiz
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-components">
          <div className="component-container">
            <div className="about-us-title">Projelerimiz</div>
            <div className="row">
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-life">
                  <a>
                    <img src="/homepage-rectangle-images/life-1.jpg" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-life">
                  <a>
                    <img src="/homepage-rectangle-images/life-2.jpg" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-nova">
                  <a>
                    <img src="/homepage-rectangle-images/nova.jpg" />
                  </a>
                </Link>
              </div>
              <div className="col-3 img-container-main-project fadding-photo">
                <Link href="/postacilar-prestige">
                  <a>
                    <img src="/homepage-rectangle-images/prestige.jpg" />
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
                Diğer Projelerimiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
