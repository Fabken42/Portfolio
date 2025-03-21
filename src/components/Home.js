import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fotoFabricio from '../img/fabricioK.jpg';
import curriculoPdf from '../pdf/cvAtualizado2024.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <Container id="home" className="home-container">
            <Row className="align-items-center">
                <Col sm={12} md={6} className="image-container">
                    <img
                        src={fotoFabricio}
                        alt="Foto de Fabricio Kohatsu"
                        className="profile-image z-1"
                    />
                </Col>

                <Col sm={12} md={6} className="text-container">
                    <h1 className="title">Visão Geral</h1>
                    <hr />
                    <p className="description">
                        Estudo programação há 4 anos, atualmente curso o 2º ano em <span className='highlight'>Análise e Desenvolvimento de Sistemas</span>. Tenho experiência em desenvolvimento <span className='highlight'>Full Stack em MERN stack</span> (MongoDB, Express.js, React.js e Node.js), adquirida através de projetos individuais com base em ideias próprias. Busco uma oportunidade onde possa aplicar minhas habilidades, expandir meu conhecimento e contribuir com soluções inovadoras.
                    </p>
                    <a href={curriculoPdf} target="_blank" className="cv-button">
                        Download CV
                        <FontAwesomeIcon icon={faBookOpen} size="md" className="cv-icon" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};
