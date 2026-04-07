import { useRouter } from "next/router";
import Link from "next/link";

export default function AllProjects() {
  const router = useRouter();

  return (
    <>
      <div className="container">
        {/* <div className="desktop-components">
                    <div className="component-container-last-item">
                        <div className="about-us-title">
                            Projelerimiz
                        </div>
                        <div className="rowe">
                            <div className="img-container-main-project fadding-photo">
                                <Link href="/postacilar-life">
                                    <a>
                                        <img src="/1.webp" />
                                    </a>
                                </Link>
                            </div>
                            <div className="img-container-projects-top">
                                <div className="fadding-photo">
                                    <Link href="/postacilar-nova">
                                        <a><img src="/nova/nova_slides_1.webp" /></a>
                                    </Link>
                                </div>
                                <div className="img-container-projects-bottom fadding-photo">
                                    <Link href="/postacilar-prestige">
                                        <a>
                                            <img src="/prestige/prestige_slide_2.webp" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="rowe">
                            <div className=" img-container-projects fadding-photo">
                                <Link href="/postacilar-yakamoz">
                                    <a>
                                        <img src="/yakamoz1.webp" />
                                    </a>
                                </Link>
                            </div>
                            <div className=" img-container-projects fadding-photo">
                                <Link href="/postacilar-idil">
                                    <a>
                                        <img src="/idil1.webp" />

                                    </a>
                                </Link>
                            </div>
                            <div className=" img-container-projects fadding-photo">
                                <Link href="/postacilar-nilufer">
                                    <a>
                                        <img src="/nilufer3.webp" />
                                    </a>
                                </Link>
                            </div>
                            <div className=" img-container-projects fadding-photo">
                                <Link href="/postacilar-lotus">
                                    <a>
                                        <img src="/lotus/lotus2.webp" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> */}

        <div className="">
          <div className="component-container-last-item">
            <div className="about-us-title">Projelerimiz</div>
            <div className="row">
            <div className="col-md-4 col-6 img-container-projects fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">Satışı Devam Ediyor</span>
                <img
                  onClick={() => router.push("/postacilar-life2")}
                  src="/life2/outside/1-square.webp"
                />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">Satışı Devam Ediyor</span>
                <img
                  onClick={() => router.push("/postacilar-life")}
                  src="/life-cropped.webp"
                />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img
                  onClick={() => router.push("/postacilar-nova")}
                  src="/nova/nova_slides_1.webp"
                />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img
                  onClick={() => router.push("/postacilar-prestige")}
                  src="/prestige/prestige_slide_2.webp"
                />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img
                  onClick={() => router.push("/postacilar-yakamoz")}
                  src="/yakamoz1.webp"
                />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img
                  onClick={() => router.push("/postacilar-idil")}
                  src="/idil1.webp"
                />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img
                  onClick={() => router.push("/postacilar-nilufer")}
                  src="/nilufer3.webp"
                />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img
                  onClick={() => router.push("/postacilar-lotus")}
                  src="/lotus/lotus2.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
