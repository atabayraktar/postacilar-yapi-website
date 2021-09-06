import {
    Navbar, Nav
} from 'react-bootstrap';
export default function Header({ refs }) {
    let [projectsRef, contactRef, aboutUsRef, logoRef] = refs;
    const scrollToAboutUs = () => {
        aboutUsRef.current.scrollIntoView();
    }
    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView();
    }
    const scrollToContact = () => {
        contactRef.current.scrollIntoView();
    }
    const scrollToLogo = () => {
        window.scrollTo({
            top: 0,
        });
    }
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <div className="header-logo">
                    <Navbar.Brand onClick={scrollToLogo}><img src="/logo.png" /></Navbar.Brand>
                </div>
                <Nav className="ms-auto header">
                    <Nav.Link onClick={scrollToAboutUs}>Hakkımızda</Nav.Link>
                    <Nav.Link onClick={scrollToProjects}>Projeler</Nav.Link>
                    <Nav.Link onClick={scrollToContact}>İletişim</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}