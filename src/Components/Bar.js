import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
export function Bar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/home">
            <Navbar.Brand>Pet Clinic</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/calendar">
                    <Button variant={"dark"}>Kalendarz</Button>
                </Link>
                <Link to="/pet">
                    <Button variant={"dark"}>Zwierzęta</Button>
                </Link>
            </Nav>
            <Nav>
                <Link to="/login">
                    <Button variant={"outline-danger"}>wyloguj</Button>
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}