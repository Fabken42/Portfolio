import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fotoFabricio from '../img/fabricioK.jpg';
import curriculoPdf from '../pdf/cvAtualizado2024.pdf'

export default function Home() {
    return (
        <Container id="home" className="my-4 inicio">
            <Row>
                <Col xs={12} md={6} className="text-center">
                    <img
                        src={fotoFabricio}
                        alt="Foto de Fabricio Kohatsu"
                        className="img-fluid rounded w-100 retrato"
                    />
                </Col>

                <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="w-100 text-center mb-4 bg-light shadow text-primary rounded-pill py-2 px-4">Visão Geral</h1>
                    <p className='text-center'>
                    Estudo programação há 4 anos, cursando o 1º ano em <strong className='text-primary'>Análise e Desenvolvimento de Sistemas</strong>. Procuro vaga como programador Full Stack, tendo experiência com <strong className='text-primary'>MERN stack</strong> (MongoDB, Express.js, React.js e Node.js), para desenvolver meus conhecimentos e contribuir com a empresa.
                    </p>
                    <a href={curriculoPdf} target="_blank" className='btn btn-primary rounded-pill'>Download CV</a>
                </Col>
            </Row>
        </Container>
    );
};
