import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BarraProgresso from './ProgressBar';

const SobreMim = () => {
  return (
    <Container id="about" className="about-container">
      <Row>
        <Col md={6} className="about-section">
          <h2 className="about-title">Personalidade & Interesses</h2>
          <hr />
          <p className="about-text">
            Com uma <span className='highlight'>personalidade introspectiva e curiosa</span>, abordo problemas com lógica e criatividade. <span className='highlight'>Analítico</span> por natureza, tenho facilidade em desmontar problemas complexos e propor <span className='highlight'>soluções objetivas e eficientes</span>. Valorizo o trabalho em equipe e busco constantemente aprimorar minhas habilidades. Meus <span className='highlight'>interesses</span> incluem: xadrez, estudo de japonês, origami e filosofia.
          </p>
        </Col>
        <Col md={6} className="about-section">
          <h2 className="about-title">Experiência em projetos pessoais</h2>
          <hr />
          <p className="about-text">
            Desenvolvi <span className='highlight'>aplicações Full Stack com base em ideias próprias</span>, aplicando o <span className='highlight'>MERN stack</span> para criar plataformas interativas e funcionais. Entre os projetos, aprendi a <span className='highlight'>elaborar interfaces intuitivas, implementar servidores, e criar APIs personalizadas</span>. Além disso, desenvolvi soluções para validação de usuários e manipulação dinâmica de dados.
          </p>
        </Col>
      </Row>
      <BarraProgresso />
    </Container>
  );
};

export default SobreMim;
