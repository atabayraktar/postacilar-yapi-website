import { Navbar, Nav } from 'react-bootstrap';
import InfoBar from './info-bar';

export default function Header() {
    return (
        <>
            <div className="sticky-header">
            <InfoBar />
            <Navbar className='color-nav' variant="dark">
                <div className="header-inner-wrapper--detail">
                    <div className="header-logo">
                        <Navbar.Brand href="/" aria-label="Postacılar Yapı — Ana Sayfa"><img src="/logo.webp" alt="Postacılar Yapı logosu" width="257" height="46" /></Navbar.Brand>
                    </div>
                    <Nav className="ms-auto header">
                        <Nav.Link href="/#hakkimizda">Hakkımızda</Nav.Link>
                        <Nav.Link href="/projelerimiz">Projeler</Nav.Link>
                        <Nav.Link href="/#iletisim">İletişim</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
            </div>
        </>
    )
}