import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap';
import Link from 'next/link';
export default function Projects({ projectsRef }) {
    const router = useRouter();
    return (
        <>
            <div id="projeler" ref={projectsRef} className="container">
                <div className="desktop-components">
                    <div className="component-container">
                        <div className="about-us-title">
                            Projelerimiz
                        </div>
                        <div className="row">
                            <div className="col-9 img-container-main-project fadding-photo">
                                <Link href="/postacilar-life">
                                    <a>
                                        <img src="/1.jpg" />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-3 img-container-projects">
                                <div className="fadding-photo">
                                    <Link href="/postacilar-nova">
                                        <a>
                                            <img src="/nova/nova_slide_1.jpg" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="img-container-projects-bottom fadding-photo">
                                    <Link href="/postacilar-prestige">
                                        <a>
                                            <img src="/prestige/prestige_slide_2.JPG" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="view-more-button">
                            <Link href="/projelerimiz">
                                <a>
                                    <Button className='color-nav' variant="dark" size="lg">Diğer Projelerimiz</Button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mobile-components">
                    <div className="component-container">
                        <div className="about-us-title">
                            Projelerimiz
                        </div>
                        <div className="img-container fadding-photo">
                            <img src="/1.jpg" />
                        </div>
                        <div className="row">
                            <div className="col-6 img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-nova")} src="/nova/nova_slide_1.jpg" />
                            </div>
                            <div className="col-6 img-container-projects fadding-photo">
                                <img onClick={() => router.push("/postacilar-prestige")} src="/prestige/prestige_slide_2.JPG" />
                            </div>
                        </div>
                        <div className="view-more-button">
                            <Button onClick={() => router.push("/projelerimiz")} variant="dark" size="lg">Diğer Projelerimiz</Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}