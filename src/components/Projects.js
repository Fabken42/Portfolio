import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import crowdedNarrative from '../img/crowdedNarrative.png';
import oQueVocePrefere from '../img/oQueVocePrefere.png';
import studyQuiz from '../img/studyQuiz.png';
import pixelGames from '../img/pixelGames.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    imageUrl: crowdedNarrative,
    link: 'https://crowded-narrative.onrender.com/',
    github: 'https://github.com/Fabken42/crowded-narrative',
    title: 'Escreva narrativas em conjunto com outras pessoas',
  },
  {
    imageUrl: oQueVocePrefere,
    link: 'https://o-que-voce-prefere-8bd2f.web.app',
    github: 'https://github.com/Fabken42/qual-voce-prefere',
    title: 'Crie perguntas e vote em suas opções favoritas',
  },
  {
    imageUrl: studyQuiz,
    link: 'https://study-quiz.onrender.com',
    github: 'https://github.com/Fabken42/study-quiz',
    title: 'Crie listas e estude-as através de um quiz',
  },
  {
    imageUrl: pixelGames,
    link: 'https://pixel-games.vercel.app',
    github: 'https://github.com/Fabken42/pixel-games',
    title: 'Jogos 2D no estilo de pixel arte (criados em Phaser.js)',
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
    <Container className="mt-4 text-center" id="projects">
      <hr/>
      <h2 className="my-4 py-2 bg-light shadow text-primary rounded-pill">Meus Projetos</h2>
      <Row className="justify-content-center">
        {projects.map((project, i) => (
          <Col key={i} sm={12} lg={6}>
            <Card className="mb-3 bg-dark text-white">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center mb-3">{project.title}</Card.Title>
                <Card.Img variant="top" src={project.imageUrl} />
                <div className="mt-auto text-center">
                  <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer" className="my-2 w-100">
                    Visitar o site <FontAwesomeIcon icon={faChrome}/>
                  </Button>
                  <Button variant="secondary" href={project.github} target="_blank" rel="noopener noreferrer" className="w-100">
                    Projeto no github <FontAwesomeIcon icon={faGithub}/>
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
