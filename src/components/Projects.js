import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import siteAimTrainer from '../img/siteAimTrainer.png'
import siteJogoVelha from '../img/siteJogoVelha.png'
import siteListaTarefas from '../img/siteListaTarefas.png'
import siteOqueVocePrefere from '../img/siteOqueVocePrefere.png'
import sitePrevisaoTempo from '../img/sitePrevisaoTempo.png'
import siteSimonGame from '../img/siteSimonGame.png'

const items = [
    {
        imageUrl: siteListaTarefas,
        link: 'https://gerenciador-de-tarefas-seven.vercel.app/',
        titulo: 'Gerenciador de Tarefas',
    },
    {
        imageUrl: siteJogoVelha,
        link: 'https://jogo-velha-multiplayer.web.app/',
        titulo: 'Jogo da Velha Multiplayer',
    },
    {
        imageUrl: siteSimonGame,
        link: 'https://simon-game-five-sage.vercel.app/',
        titulo: 'Simon Game',
    },
    {
        imageUrl: sitePrevisaoTempo,
        link: 'https://previsao-do-tempo-navy.vercel.app/',
        titulo: 'Previsão do Tempo',
    },
    {
        imageUrl: siteAimTrainer,
        link: 'https://aim-trainer-fawn.vercel.app/',
        titulo: 'Acerte os alvos!',
    },
    {
        imageUrl: siteOqueVocePrefere,
        link: 'https://oquevoceprefere-e2799.web.app/',
        titulo: 'O que você prefere?',
    },
];

export default function Projects() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Carousel className='border-top pt-4 my-4 carrossel' id='projects' activeIndex={index} onSelect={handleSelect}>
          {items.map((item, i) => (
            <Carousel.Item key={i}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className='link-no-underline'>
                <div className="caption-container">
                  <h3 className='text-center text-black mb-3'>{item.titulo}</h3>
                  <img
                    className="rounded d-block img-fluid"
                    src={item.imageUrl}
                    alt={`Slide ${i + 1}`}
                  />
                </div>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      );
    };