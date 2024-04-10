import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-2 mt-4">
      <Container>
        <Row className="justify-content-between">
          <Col md={6}>
            <h5>Redes Sociais</h5>
            <div className="d-flex align-items-center">
              <a href='https://www.instagram.com/fabricio_1512/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x" className="text-white me-3" /></a>
              <a href='https://www.facebook.com/fabricio.kenzo.7' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" className="text-white me-3" /></a>
              <a href='https://www.linkedin.com/in/fabr%C3%ADcio-kohatsu-7486a9279/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white me-3" /></a>
              <a href='https://github.com/Fabken42' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" className="text-white me-3" /></a> 
            </div>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <h5>Entrar em Contato</h5>
            <p className="mb-0">fabken42@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
  
};