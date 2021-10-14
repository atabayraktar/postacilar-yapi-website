import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <div className="header-logo">
                    <Navbar.Brand href="/"><img src="/logo.png" /></Navbar.Brand>
                </div>
                <Nav className="ms-auto header">
                    <Nav.Link href="/#hakkimizda">Hakkımızda</Nav.Link>
                    <Nav.Link href="/#projeler">Projeler</Nav.Link>
                    <Nav.Link href="/#iletisim">İletişim</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}