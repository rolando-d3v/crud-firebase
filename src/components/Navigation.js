import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link"  >Home</Link>
                    <Link to="/crudfirebase" className="nav-link"  >Crud fire</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
