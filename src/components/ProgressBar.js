import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

//          <h2 className='text-primary text-center fw-bold '>Personalidade & Interesses</h2>

//          <hr className="mx-auto w-50 border-primary mt-2 mb-4" />

export default function BarraProgresso() {
    return (
        <Container className="mt-5">
            <h3 className='text-primary text-center fw-bold z-1'>Linguagens de Programação & Tecnologias</h3>
            <hr className="mx-auto w-50 border-primary mt-2 mb-4" />
            <Row className='text-start'>
                <Col md={4} className="mb-3 z-1">
                    <h5>HTML</h5>
                    <ProgressBar className='barra-progresso' now={85} label="85%" variant="success" />
                </Col>
                <Col md={4} className="mb-3 z-1">
                    <h5>CSS</h5>
                    <ProgressBar className='barra-progresso' now={85} label="85%" variant="success" />
                </Col>
                <Col md={4} className="mb-3 z-1">
                    <h5>JavaScript</h5>
                    <ProgressBar className='barra-progresso' now={85} label="85%" variant="success" />
                </Col>
            </Row>
            <Row className="mt-3 text-start">
                <Col md={4} className="mb-3 z-1">
                    <h5>React.js</h5>
                    <ProgressBar className='barra-progresso' now={90} label="90%" variant="success" />
                </Col>
                <Col md={4} className="mb-3 z-1">
                    <h5>Node.js</h5>
                    <ProgressBar className='barra-progresso' now={65} label="65%" variant="warning" />
                </Col>
                <Col md={4} className="mb-3 z-1">
                    <h5>Python</h5>
                    <ProgressBar className='barra-progresso' now={55} label="55%" variant="warning" />
                </Col>
            </Row>
            <h3 className=' mt-3 text-primary text-center fw-bold z-1'>Idiomas</h3>
            <hr className="mx-auto w-50 border-primary mt-2 mb-4" />
            <Row className="mt-3 text-start">
                <Col md={4} className="mb-3 z-1">
                    <h5>Inglês</h5>
                    <ProgressBar className='barra-progresso' now={85} label="85%" variant="success" />
                </Col>
                <Col md={4} className="mb-3 z-1">
                    <h5>Espanhol</h5>
                    <ProgressBar className='barra-progresso' now={55} label="55%" variant="warning" />
                </Col>
                <Col md={4} className="mb-3 z-1">
                    <h5>Japonês</h5>
                    <ProgressBar className='barra-progresso' now={40} label="40%" variant="danger" />
                </Col>
            </Row>
        </Container>
    );
};
