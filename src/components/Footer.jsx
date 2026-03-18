import React from 'react';
import { Row, Col } from 'antd';
import { FacebookFilled, InstagramFilled, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <Row gutter={[40, 40]} justify="space-between" align="top">
          <Col xs={24} md={8}>
            <div className="footer-logo">
              <img src="/images/cropped-GOA_LOGO_BLANCO_NOTEXTO.png" alt="GOA Hostel" />
            </div>
            <p className="footer-desc">
              Confort y relax al mejor precio en Termas de Río Hondo. 
              Viví la mejor experiencia en aguas termales con servicios premium.
            </p>
          </Col>

          <Col xs={24} md={8}>
            <h4 className="footer-title">Contacto</h4>
            <div className="contact-links">
              <a href="https://wa.me/5493812497721" target="_blank" rel="noopener noreferrer">
                <WhatsAppOutlined /> +54 9 381 249-7721
              </a>
              <a href="mailto:admin@mundogoa.com">
                <MailOutlined /> admin@mundogoa.com
              </a>
            </div>
            
            <h4 className="footer-title mt-4">Redes Sociales</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61556280236814" target="_blank" rel="noopener noreferrer">
                <FacebookFilled />
              </a>
              <a href="https://www.instagram.com/mundogoa/" target="_blank" rel="noopener noreferrer">
                <InstagramFilled />
              </a>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <h4 className="footer-title">Legales</h4>
            <ul className="legal-links">
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Política de Cookies</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Política de Reembolso</a></li>
            </ul>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GOa Hostel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
