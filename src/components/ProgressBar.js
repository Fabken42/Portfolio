import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

export default function BarraProgresso() {
    return (
        <Container className="progress-container">
            <h3 className="progress-title">Linguagens de Programação & Tecnologias</h3>
            <hr />
            <Row className="progress-row">
                <Col md={4}>
                    <h5 className="progress-skill-title">HTML / CSS</h5>
                    <ProgressBar className='rounded-pill' now={90} label="90%" variant="success" />
                </Col>
                <Col md={4}>
                    <h5 className="progress-skill-title">JavaScript</h5>
                    <ProgressBar className='rounded-pill' now={90} label="90%" variant="success" />
                </Col>
                <Col md={4}>
                    <h5 className="progress-skill-title">React.js</h5>
                    <ProgressBar className='rounded-pill' now={90} label="90%" variant="success" />
                </Col>
            </Row>
            <Row className="progress-row">
                <Col md={4}>
                    <h5 className="progress-skill-title">Node.js</h5>
                    <ProgressBar className='rounded-pill' now={70} label="70%" variant="warning" />
                </Col>
                <Col md={4}>
                    <h5 className="progress-skill-title">Python</h5>
                    <ProgressBar className='rounded-pill' now={60} label="60%" variant="warning" />
                </Col>
                <Col md={4}>
                    <h5 className="progress-skill-title">Git / GitHub</h5>
                    <ProgressBar className='rounded-pill' now={85} label="85%" variant="success" />
                </Col>
            </Row>
            <h3 className="progress-title mt-5">Idiomas</h3>
            <hr />
            <Row className="progress-row">
                <Col md={4}>
                    <h5 className="progress-skill-title">Inglês</h5>
                    <ProgressBar className='rounded-pill' now={90} label="90%" variant="success" />
                </Col>
                <Col md={4}>
                    <h5 className="progress-skill-title">Espanhol</h5>
                    <ProgressBar className='rounded-pill' now={50} label="50%" variant="warning" />
                </Col>
                <Col md={4}>
                    <h5 className="progress-skill-title">Japonês</h5>
                    <ProgressBar className='rounded-pill' now={45} label="45%" variant="danger" />
                </Col>
            </Row>
        </Container>
    );
}
