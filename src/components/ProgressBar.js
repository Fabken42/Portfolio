import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export default function BarraProgresso() {
    return (
        <Container className="mt-3">
            <hr/>
            <h3 className='text-center mb-3 p-2 bg-light shadow text-primary rounded-pill'>Linguagens de Programação & Tecnologias</h3>
            <Row className='text-start'>
                <Col md={4} className="mb-3">
                    <h5>HTML</h5>
                    <ProgressBar className='barra-progresso' now={90} label="90%" variant="success" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>CSS</h5>
                    <ProgressBar className='barra-progresso' now={85} label="85%" variant="success" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>JavaScript</h5>
                    <ProgressBar className='barra-progresso' now={80} label="80%" variant="success" />
                </Col>
            </Row>
            <Row className="mt-3 text-start">
                <Col md={4} className="mb-3">
                    <h5>React.js</h5>
                    <ProgressBar className='barra-progresso' now={85} label="85%" variant="success" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>Node.js</h5>
                    <ProgressBar className='barra-progresso' now={60} label="60%" variant="warning" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>Python</h5>
                    <ProgressBar className='barra-progresso' now={50} label="50%" variant="warning" />
                </Col>
            </Row>
            <hr/>
            <h3 className='text-center mb-3 py-2 bg-light shadow text-primary rounded-pill'>Idiomas</h3>
            <Row className="mt-3 text-start">
                <Col md={4} className="mb-3">
                    <h5>Inglês</h5>
                    <ProgressBar className='barra-progresso' now={85} label="85%" variant="success" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>Espanhol</h5>
                    <ProgressBar className='barra-progresso' now={35} label="35%" variant="danger" />
                </Col>
                <Col md={4} className="mb-3">
                    <h5>Japonês</h5>
                    <ProgressBar className='barra-progresso' now={35} label="35%" variant="danger" />
                </Col>
            </Row>
        </Container>
    );
};
