import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BarraProgresso from './ProgressBar';

const SobreMim = () => {
  return (
      <Container id="about" className='mt-4 pt-3 border-top text-center sobre-mim'>
        <Row>
          <Col md={6}>
            <h2>Personalidade & Interesses</h2>
            <p>
              Introspectivo e curioso, sempre explorando ideias e conceitos abstratos. Analítico e lógico, adoro desmontar problemas complexos e procurar soluções criativas. Sempre disposto a ouvir outras perspectivas e aprender com os outros. <strong>Interesses:</strong> teclado, xadrez e idioma japonês.
            </p>
          </Col>
          <Col md={6}>
            <h2>Experiência Profissional</h2>
            <p>
              Desenvolvedor web. Embora não tenha experiência profissional na área de TI, adquiri conhecimentos valiosos em design e desenvolvimento de sites por meio de projetos pessoais.
            </p>
          </Col>
        </Row>

        <BarraProgresso/>

      </Container>
  );
};

export default SobreMim;
