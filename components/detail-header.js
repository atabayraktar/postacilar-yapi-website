import { Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <div className="header-logo">
                    <Navbar.Brand><img src="/logo.png" /></Navbar.Brand>
                </div>
                <Nav className="ms-auto header">
                    <Nav.Link>Hakkımızda</Nav.Link>
                    <Nav.Link >Projeler</Nav.Link>
                    <Nav.Link>İletişim</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}