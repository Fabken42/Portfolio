import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BarraProgresso from './ProgressBar';

const SobreMim = () => {
  return (
      <Container id="about" className='mt-4  text-center sobre-mim'>
        <Row>
          <hr/>
          <Col md={6}>
            <h2 className='text-center mb-4 bg-light text-primary rounded-pill p-2 shadow'>Personalidade & Interesses</h2>
            <p>
            <strong className='text-primary'>Introspectivo e curioso</strong>, exploro ideias e conceitos abstratos. <strong className='text-primary'>Analítico e lógico</strong>, busco desmontar problemas complexos e procurar soluções criativas. Sempre disposto a ouvir outras perspectivas e aprender com os outros. <strong className='text-primary'>Interesses</strong>: teclado, xadrez e idioma japonês.
            </p>
          </Col>
          <Col md={6}>
            <h2 className='text-center mb-4 bg-light text-primary rounded-pill p-2 shadow'>Experiência em projetos pessoais</h2>
            <p>
              Através do desenvolvimento de aplicações Full Stack em MERN, aprendi etapas referentes ao desenvolvimento de interfaces de usuário, configuração do servidor, criação de APIs, tratamento de erros, validação de usuário e manipulação de dados no banco de dados.
            </p>
          </Col>
        </Row>
        <BarraProgresso/>
      </Container>
  );
};

export default SobreMim;
