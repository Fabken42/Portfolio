import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer id="contact" className="footer-container">
      <Container>
        <Row className="footer-content">
          <Col md={6} className="social-section">
            <h5 className="subtitle">Redes Sociais:</h5>
            <div className="social-icons">
              <a href="https://github.com/Fabken42" target="_blank" rel="noopener noreferrer" className="github">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/fabr%C3%ADcio-kohatsu-7486a9279/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.instagram.com/fabricio_1512/" target="_blank" rel="noopener noreferrer" className="instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.facebook.com/fabricio.kenzo.7" target="_blank" rel="noopener noreferrer" className="facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
          </Col>

          <Col md={6} className="contact-section">
            <h5 className="subtitle">Entre em Contato:</h5>
            <p>Email: <span className="email" onClick={() => navigator.clipboard.writeText("fabken42@gmail.com")}>fabken42@gmail.com</span></p>
            <p>Telefone: <span className="tel" onClick={() => navigator.clipboard.writeText("(11) 95481-8106")}> (11) 95481-8106</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
