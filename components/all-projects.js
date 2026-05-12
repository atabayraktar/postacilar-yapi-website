import { useRouter } from "next/router";
import Link from "next/link";

export default function AllProjects() {
  const router = useRouter();

  return (
    <>
      <div className="container">
        <div className="">
          <div className="component-container-last-item">
            <div className="about-us-title">Projelerimiz</div>
            <div className="row">
              <div className="col-md-4 col-6 img-container-projects fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">Satışı Devam Ediyor</span>
                <img onClick={() => router.push("/postacilar-life2")} src="/life2/outside/life2-outside-1.webp" loading="lazy" decoding="async" />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo" style={{position:'relative'}}>
                <span className="project-badge">Satışı Devam Ediyor</span>
                <img onClick={() => router.push("/postacilar-life")} src="/life/outside/life-outside-1.webp" loading="lazy" decoding="async" />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img onClick={() => router.push("/postacilar-nova")} src="/nova/outside/nova-outside-1.webp" loading="lazy" decoding="async" />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img onClick={() => router.push("/postacilar-prestige")} src="/prestige/outside/prestige-outside-1.webp" loading="lazy" decoding="async" />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img onClick={() => router.push("/postacilar-yakamoz")} src="/yakamoz/outside/yakamoz-outside-1.webp" loading="lazy" decoding="async" />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img onClick={() => router.push("/postacilar-lotus")} src="/lotus/outside/lotus-outside-1.webp" loading="lazy" decoding="async" />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img onClick={() => router.push("/postacilar-idil")} src="/idil/outside/idil-outside-1.webp" loading="lazy" decoding="async" />
              </div>
              <div className="col-md-4 col-6 img-container-projects fadding-photo">
                <img onClick={() => router.push("/postacilar-nilufer")} src="/nilufer/outside/nilufer-outside-1.webp" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
