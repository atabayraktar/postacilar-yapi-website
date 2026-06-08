import { Navbar, Nav } from 'react-bootstrap';
import InfoBar from './info-bar';
import { useApp } from '../context/AppContext';

export default function Header() {
    const { t } = useApp();
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
                        <Nav.Link href="/#hakkimizda">{t('nav.about')}</Nav.Link>
                        <Nav.Link href="/projelerimiz">{t('nav.projects')}</Nav.Link>
                        <Nav.Link href="/#iletisim">{t('nav.contact')}</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
            </div>
        </>
    )
}