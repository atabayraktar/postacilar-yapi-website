import { Button } from 'react-bootstrap';

export default function Projects({ projectsRef }) {
    return (
        <>
            <div ref={projectsRef} className="container">
                <div className="component-container">
                    <div className="about-us-title">
                        Projelerimiz
                    </div>
                    <div className="row">
                        <div className="col-8 img-container">
                            <img src="/1.jpg" />
                        </div>
                        <div className="col-4 img-container-projects">
                            <img src="/1.jpg" />
                            <div className="img-container-projects-bottom">
                                <img src="/1.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="view-more-button">
                        <Button variant="dark" size="lg">Daha Fazla Göster</Button>
                    </div>
                </div>
            </div>
        </>
    )
}