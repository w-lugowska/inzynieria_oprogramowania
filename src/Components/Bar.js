import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
export function Bar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
            <Navbar.Brand>Pet Clinic</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/b">
                    <Button variant={"dark"}> Chuj</Button>
                </Link>
                <Link to="/c">
                    <Button variant={"dark"}> Dupa</Button>
                </Link>
                <NavDropdown title="Cycki" id="collasible-nav-dropdown">
                    <Link to="/a">
                        <Button variant={"light"}>xd</Button>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/d">
                        <Button variant={"light"}>xddd</Button>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/c">
                        <Button variant={"light"}>xddddd</Button>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/b">
                        <Button variant={"light"}>xddddddd</Button>
                    </Link>
                </NavDropdown>
            </Nav>
            <Nav>
                <Link to="/a">
                    <Button variant={"dark"}>ciastko</Button>
                </Link>
                <Link to="/b">
                    <Button variant={"dark"}>ciasteczko</Button>
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}