import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
            <Container>
                <Navbar.Brand>
                    <Nav.Link href="#home">
                        <h1 className='display-6'>Portfólio de Fabrício K.</h1>
                    </Nav.Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#about">Sobre Mim</Nav.Link>
                        <Nav.Link href="#projects">Projetos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
