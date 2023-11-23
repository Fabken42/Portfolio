import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Redes Sociais</h5>
            <div> 
              <a href='https://www.instagram.com/fabricio_1512/' target='_blank'><FontAwesomeIcon icon={faInstagram} size="2x" className="text-white me-3" /></a>
              <a href='https://www.facebook.com/fabricio.kenzo.7' target='_blank'><FontAwesomeIcon icon={faFacebook} size="2x" className="text-white me-3" /></a>
              <a href='https://www.linkedin.com/in/fabr%C3%ADcio-kohatsu-7486a9279/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white me-3" /></a>
              <a href='https://github.com/Fabken42' target='_blank'><FontAwesomeIcon icon={faGithub} size="2x" className="text-white me-3" /></a> 
            </div>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Entrar em Contato</h5>
            <p>fabken42@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};