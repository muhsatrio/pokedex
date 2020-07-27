import React from 'react'
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavbarPage = () => (
    <div className="NavbarPage">
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">PokemonDex-Ku</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    </div>
)

export default NavbarPage;

