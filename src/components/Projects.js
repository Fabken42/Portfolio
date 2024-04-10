import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import siteAimTrainer from '../img/siteAimTrainer.png';
import siteListaTarefas from '../img/siteListaTarefas.png';
import sitePrevisaoTempo from '../img/sitePrevisaoTempo.png';
import siteSimonGame from '../img/siteSimonGame.png';
import siteCrowdedNarrative from '../img/siteCrowdedNarrative.png';

const projects = [
  {
    imageUrl: siteCrowdedNarrative,
    link: 'https://crowded-narrative.onrender.com/',
    title: 'Escreva narrativas com outras pessoas',
  },
  {
    imageUrl: siteAimTrainer,
    link: 'https://aim-trainer-fawn.vercel.app/',
    title: 'Acerte os alvos',
  },
  {
    imageUrl: siteSimonGame,
    link: 'https://simon-game-five-sage.vercel.app/',
    title: 'Simon Game',
  },
  {
    imageUrl: sitePrevisaoTempo,
    link: 'https://previsao-do-tempo-navy.vercel.app/',
    title: 'Previsão do Tempo',
  },
  {
    imageUrl: siteListaTarefas,
    link: 'https://gerenciador-de-tarefas-seven.vercel.app/',
    title: 'Gerenciador de Tarefas',
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container className="mt-4 text-center">
      <h2 className="mb-4 border-top pt-3">Meus Projetos</h2>
      <Row className="justify-content-center">
        {projects.map((project, i) => (
          <Col key={i} sm={12} lg={6}>
            <Card className="mb-3 bg-dark text-white">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center mb-3">{project.title}</Card.Title>
                <Card.Img variant="top" src={project.imageUrl} />
                <div className="mt-auto text-center">
                  <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer" className="w-100" style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }}>
                    Ver Projeto
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
