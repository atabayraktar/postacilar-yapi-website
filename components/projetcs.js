import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap';

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
                            <div className="col-8 img-container fadding-photo">
                                <img src="/1.jpg" />
                            </div>
                            <div className="col-4 img-container-projects">
                                <div className="fadding-photo">
                                    <img src="/1.jpg" />
                                </div>
                                <div className="img-container-projects-bottom fadding-photo">
                                    <img src="/1.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="view-more-button">
                            <Button onClick={() => router.push("/projelerimiz")} variant="dark" size="lg">Diğer Projelerimiz</Button>
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
                                <img src="/1.jpg" />
                            </div>
                            <div className="col-6 img-container-projects fadding-photo">
                                <img src="/1.jpg" />
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