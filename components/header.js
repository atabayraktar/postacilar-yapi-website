import {
    Navbar, Nav
} from 'react-bootstrap';
export default function Header({ refs }) {
    let [flatRef, contactRef, logoRef] = refs;
    const scrollToFlats = () => {
        flatRef.current.scrollIntoView();
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
                <div className="container">
                    <div className="header-logo">
                        <Navbar.Brand onClick={scrollToLogo}><img src="/postacılar-life-log.png" /></Navbar.Brand>
                    </div>
                    <Nav className="me-auto header">
                        <Nav.Link >Hakkımızda</Nav.Link>
                        <Nav.Link onClick={scrollToFlats} >Projeler</Nav.Link>
                        <Nav.Link onClick={scrollToContact}>İletişim</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}