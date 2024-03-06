import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import fotoFabricio from '../img/fabricioK.jpg';
import curriculoPdf from '../pdf/cvFabricio.pdf'

export default function Home() {
    return (
        <Container id="home" className="my-5 inicio">
            <Row>
                <Col xs={12} md={6} className="text-center">
                    <img
                        src={fotoFabricio}
                        alt="Foto de Fabricio Kohatsu"
                        className="img-fluid rounded w-100 retrato"
                    />
                </Col>

                <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center mb-4">Visão Geral</h1>
                    <p className='text-center'>
                        Estudo programação há 3 anos, cursando o 1º ano em Análise e Desenvolvimento de Sistemas. Busco vaga como programador Full Stack, tendo vasta experiência em MERN (MongoDB, Express.js, React.js e Node.js), para desenvolver meus conhecimentos e contribuir com a empresa.
                    </p>
                    <a href={curriculoPdf} target="_blank" className='btn btn-primary'>Download CV</a>
                </Col>
            </Row>
        </Container>
    );
};
