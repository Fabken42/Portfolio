import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import videoTraining from '../img/videoTrainingImg.png';
import crowdedNarrative from '../img/crowdedNarrative.png';
import taskTimer from '../img/task-timer.png';
import studyQuiz from '../img/studyQuiz.png';
import pixelGames from '../img/pixelGames.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    imageUrl: videoTraining,
    link: 'https://video-training-jr8e.onrender.com/',
    github: 'https://github.com/Fabken42/video-training',
    title: 'Complete a legenda dos vídeos e aprenda um novo idioma',
    descricao: 'Desenvolvido usando MERN stack. Inspirado no site "lyricsTraining", com aspectos de gamificação. Auxilia no aprendizado de novos idiomas.
  },
  {
    imageUrl: studyQuiz,
    link: 'https://study-quiz.onrender.com',
    github: 'https://github.com/Fabken42/study-quiz',
    title: 'Crie listas e estude-as através de um quiz',
    descricao: 'Desenvolvido usando MERN stack. Permite que os usuários criem e visualizem listas de termos, em que cada termo contém definição, lembrete e status.'
  },
  {
    imageUrl: taskTimer,
    link: 'https://task-timer-khaki.vercel.app',
    github: 'https://github.com/Fabken42/task-timer',
    title: 'Gerencie suas tarefas e monitore seu tempo',
    descricao: 'Desenvolvido em React. Auxilia na gestão de tarefas e no monitoramento do tempo dedicado a cada atividade. Permite criar, gerenciar e acompanhar o progresso das tarefas interativamente.'
  },
  {
    imageUrl: pixelGames,
    link: 'https://pixel-games.vercel.app',
    github: 'https://github.com/Fabken42/pixel-games',
    title: 'Jogos 2D no estilo de pixel arte (criados em Phaser.js)',
    descricao: 'Jogos 2D estilo pixel arte em React e Phaser'
  },
  {
    imageUrl: crowdedNarrative,
    link: 'https://crowded-narrative.onrender.com/',
    github: 'https://github.com/Fabken42/crowded-narrative',
    title: 'Escreva narrativas em conjunto com outras pessoas',
    descricao: 'Desenvolvido em MERN stack. Permite que usuários criem e participem de histórias colaborativas, onde cada participante tem um tempo limitado para escrever um capítulo.'
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
    <Container className="mt-5 text-center" id="projects">
      <h2 className="text-primary text-center fw-bold z-1">Meus Projetos</h2>
      <hr className="mx-auto w-50 border-primary mt-2 mb-4" />
      <Row className="justify-content-center">
        {projects.map((project, i) => (
          <Col key={i} sm={12} lg={6}>
            <Card className="mb-3 bg-dark text-white">
              <Card.Body className="d-flex flex-column">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${i}`}>
                      {project.descricao}
                    </Tooltip>
                  }
                >
                  <FontAwesomeIcon size='lg' className='mb-2 icone-info' icon={faInfoCircle} />
                </OverlayTrigger>
                <Card.Title className="text-center mb-3">
                  {project.title}
                </Card.Title>
                <Card.Img variant="top" src={project.imageUrl} />
                <div className="mt-auto text-center">
                  <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer" className="my-2 w-100">
                    Visitar o site <FontAwesomeIcon icon={faChrome} />
                  </Button>
                  <Button variant="secondary" href={project.github} target="_blank" rel="noopener noreferrer" className="w-100">
                    Projeto no github <FontAwesomeIcon icon={faGithub} />
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
