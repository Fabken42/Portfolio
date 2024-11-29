import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BarraProgresso from './ProgressBar';


const SobreMim = () => {
  return (
    <Container id="about" className='mt-5 text-center sobre-mim'>
      <Row className='gx-5'>
        <Col md={6}>
          <h2 className='text-primary text-center fw-bold z-1'>Personalidade & Interesses</h2>
          <hr className="mx-auto w-50 border-primary mt-2 mb-4" />
          <p className='texto'>
            <strong className='text-primary'>Introspectivo e curioso</strong>, exploro ideias e conceitos abstratos. <strong className='text-primary'>Analítico e lógico</strong>, busco desmontar problemas complexos e procurar soluções criativas. Sempre disposto a ouvir outras perspectivas e aprender com os outros. <strong className='text-primary'>Interesses</strong>: xadrez, origami e idioma japonês.
          </p>
        </Col>
        <Col md={6}>
          <h2 className='text-primary text-center fw-bold z-1'>Experiência em projetos pessoais</h2>
          <hr className="mx-auto w-50 border-primary mt-2 mb-4" />
          <p className='texto'>
            Através do desenvolvimento de aplicações Full Stack em MERN, aprendi etapas referentes ao desenvolvimento de interfaces de usuário, configuração do servidor, criação de APIs, tratamento de erros, validação de usuário e manipulação de dados no banco de dados.
          </p>
        </Col>
      </Row>
      <BarraProgresso />
    </Container>
  );
};

export default SobreMim;
