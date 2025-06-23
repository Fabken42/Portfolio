
import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';

import videoTraining1 from '../img/videoTrainingImg1.png';
import videoTraining2 from '../img/videoTrainingImg2.png';
import videoTraining3 from '../img/videoTrainingImg3.png';
import videoTraining4 from '../img/videoTrainingImg4.png';
import videoTraining5 from '../img/videoTrainingImg5.png';

import crowdedNarrative1 from '../img/crowdedNarrative1.png';
import crowdedNarrative2 from '../img/crowdedNarrative2.png';
import crowdedNarrative3 from '../img/crowdedNarrative3.png';
import crowdedNarrative4 from '../img/crowdedNarrative4.png';

import rollMyTask from '../img/roll-my-task.png';

import studyQuiz1 from '../img/studyQuiz1.png';
import studyQuiz2 from '../img/studyQuiz2.png';
import studyQuiz3 from '../img/studyQuiz3.png';
import studyQuiz4 from '../img/studyQuiz4.png';

import pixelGames1 from '../img/pixelGames1.png';
import pixelGames2 from '../img/pixelGames2.png';
import pixelGames3 from '../img/pixelGames3.png';
import pixelGames4 from '../img/pixelGames4.png';
import pixelGames5 from '../img/pixelGames5.png';
import pixelGames6 from '../img/pixelGames6.png';

const projects = [
  {
    images: [videoTraining1, videoTraining2, videoTraining3,videoTraining4,videoTraining5],
    link: 'https://video-training-jr8e.onrender.com/',
    github: 'https://github.com/Fabken42/video-training',
    title: 'Video Training',
    descricao: 'Inspirado no site LyricsTraining, o jogo propõe completar legendas de vídeos para aprender um idioma, com elementos de gamificação, placar de líderes e pontuação para maior engajamento.'
  },
  {
    images: [rollMyTask],
    link: 'https://roll-my-task.vercel.app/',
    github: 'https://github.com/Fabken42/roll-my-task',
    title: 'Roll My Task',
    descricao: 'Digite as tarefas que deseja realizar, e clique no dado, que escolherá aleatoriamente o que será feito. O site também permite concluir, excluir e editar as tarefas da lista.'
  },
  {
    images: [studyQuiz1, studyQuiz2, studyQuiz3, studyQuiz4],
    link: 'https://study-quiz.onrender.com',
    github: 'https://github.com/Fabken42/study-quiz',
    title: 'Study Quiz',
    descricao: 'Crie listas com termos, definições e lembretes, e use-as em quizzes de múltipla escolha. Com base no desempenho, cada termo recebe um status, representado por emojis (como: feliz, neutro, triste).'
  },
  {
    images: [pixelGames1, pixelGames2, pixelGames3, pixelGames4, pixelGames5, pixelGames6],
    link: 'https://pixel-games.vercel.app',
    github: 'https://github.com/Fabken42/pixel-games',
    title: 'Pixel Games',
    descricao: 'Jogos 2D no estilo de pixel arte (criados em Phaser.js), incluindo clássicos como pong, snake, tetris, jogo da velha, jogo da memória, simon, e muito mais.'
  },
  {
    images: [crowdedNarrative1, crowdedNarrative2, crowdedNarrative3, crowdedNarrative4],
    link: 'https://crowded-narrative.onrender.com/',
    github: 'https://github.com/Fabken42/crowded-narrative',
    title: 'Crowded Narrative',
    descricao: 'Crie narrativas colaborativas em que cada participante escreve um capítulo, baseado no anterior. A vez de escrever segue um ciclo, e com tempo limitado para cada autor. Ao final, a história completa fica disponível para leitura.'
  },
];

export default function Projects() {
  return (
    <Container className="projects-container" id="projects">
      <h2 className="projects-title">Meus Projetos</h2>
      <hr />
      <Row>
        {projects.map((project, i) => (
          <Col key={i} sm={12} lg={6}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Card className="project-card">
      <Card.Body>
        <Card.Title className="project-title mb-3">{project.title}</Card.Title>

        {/* Indicador de posição da imagem */}
        <div className="image-indicator">
          {project.images.map((_, idx) => (
            <span key={idx} className={`indicator-dot ${index === idx ? 'active' : ''}`} />
          ))}
        </div>

        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls indicators={false} className="project-carousel">
          {project.images.map((img, idx) => (
            <Carousel.Item key={idx}>
              <Card.Img variant="top" src={img} className="project-image" />
            </Carousel.Item>
          ))}
        </Carousel>

        <Card.Text className="project-description my-3">{project.descricao}</Card.Text>
        <div className="project-buttons">
          <Button className="btn-visitar " href={project.link} target="_blank" rel="noopener noreferrer">
            Visitar o site <FontAwesomeIcon icon={faChrome} />
          </Button>
          <Button variant='secondary' href={project.github} target="_blank" rel="noopener noreferrer">
            Projeto no GitHub <FontAwesomeIcon icon={faGithub} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
