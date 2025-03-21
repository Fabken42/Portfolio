import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="dark" expand="lg" fixed="top" collapseOnSelect className="custom-navbar">
            <Container>
                <Navbar.Brand>
                    <Nav.Link href="#home">
                        <h1 className="brand-title">Portfólio de Fabrício K. K.</h1>
                    </Nav.Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#about">Sobre Mim</Nav.Link>
                        <Nav.Link href="#projects">Projetos</Nav.Link>
                        <Nav.Link href="#contact">Entrar em contato</Nav.Link> {/* Novo link */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
