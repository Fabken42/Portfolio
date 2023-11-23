import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export default function BarraProgresso() {
    return (
        <Container className="mt-3">
            <h3 className='text-center mb-3 border-top pt-3'>Linguagens de Programação & Tecnologias</h3>
            <Row className='text-start'>
                <Col md={4} className="mb-3">
                    <h5>HTML</h5>
                    <ProgressBar className='barra-progresso' now={85} label="85%" variant="success" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>CSS</h5>
                    <ProgressBar className='barra-progresso' now={80} label="80%" variant="success" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>JavaScript</h5>
                    <ProgressBar className='barra-progresso' now={60} label="60%" variant="warning" />
                </Col>
            </Row>
            <Row className="mt-3 text-start">
                <Col md={4} className="mb-3">
                    <h5>React</h5>
                    <ProgressBar className='barra-progresso' now={75} label="75%" variant="success" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>Bootstrap</h5>
                    <ProgressBar className='barra-progresso' now={55} label="55%" variant="warning" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>Firebase</h5>
                    <ProgressBar className='barra-progresso' now={40} label="40%" variant="danger" />
                </Col>
            </Row>
            <h3 className='text-center mb-3 border-top pt-3'>Idiomas</h3>
            <Row className="mt-3 text-start">
                <Col md={4} className="mb-3">
                    <h5>Inglês</h5>
                    <ProgressBar className='barra-progresso' now={80} label="80%" variant="success" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>Espanhol</h5>
                    <ProgressBar className='barra-progresso' now={50} label="50%" variant="warning" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>Japonês</h5>
                    <ProgressBar className='barra-progresso' now={35} label="35%" variant="danger" />
                </Col>
            </Row>
        </Container>
    );
};