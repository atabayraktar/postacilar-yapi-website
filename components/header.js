import { Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';
import InfoBar from './info-bar';
import { useApp } from '../context/AppContext';

export default function Header() {
    const router = useRouter();
    const isHome = router.pathname === '/';
    const { t } = useApp();

    const handleLogo = (e) => {
        e.preventDefault();
        if (isHome) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/');
        }
    };

    return (
        <>
            <div className="sticky-header">
            <InfoBar />
            <Navbar className='color-nav' variant="dark">
                <div className="header-inner-wrapper">
                    <div className="header-logo">
                        <Navbar.Brand href="/" onClick={handleLogo} aria-label="Postacılar Yapı — Ana Sayfa"><img src="/logo.webp" alt="Postacılar Yapı logosu" width="257" height="46" /></Navbar.Brand>
                    </div>
                    <Nav className="ms-auto header">
                        <Nav.Link href="/#hakkimizda">{t('nav.about')}</Nav.Link>
                        <Nav.Link href="/#projeler">{t('nav.projects')}</Nav.Link>
                        <Nav.Link href="/#iletisim">{t('nav.contact')}</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
            </div>
        </>
    )
}