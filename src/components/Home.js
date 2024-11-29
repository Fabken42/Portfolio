import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fotoFabricio from '../img/fabricioK.jpg';
import curriculoPdf from '../pdf/cvAtualizado2024.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <Container id="home" className="my-4 inicio">
            <Row>
                <Col xs={12} md={6} className="text-center z-1">
                    <img
                        src={fotoFabricio}
                        alt="Foto de Fabricio Kohatsu"
                        className="img-fluid rounded w-100 retrato"
                    />
                </Col>

                <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="z-1 text-primary text-center fw-bold">
                        Visão Geral
                    </h1>
                    <hr className="text-center w-50 border-primary mt-2 mb-4" />
                    <p className="text-center texto">
                        Estudo programação há 4 anos, cursando 1º ano em <strong className="text-primary">Análise e Desenvolvimento de Sistemas</strong>. Procuro vaga como programador Full Stack, tendo experiência com <strong className="text-primary">MERN stack</strong> (MongoDB, Express.js, React.js e Node.js), para desenvolver meus conhecimentos e contribuir com a empresa.
                    </p>
                    <a href={curriculoPdf} target="_blank" className="z-1 btn btn-primary rounded-pill">
                        Download CV
                        <FontAwesomeIcon icon={faBookOpen} className="ms-2" size="md" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};
