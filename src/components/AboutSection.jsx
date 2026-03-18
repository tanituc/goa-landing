import React from 'react';
import { Row, Col, Space, Tag } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import './AboutSection.css';

const AboutSection = () => {
  const values = [
    { title: 'Atención personalizada', desc: 'Trato cálido y cercano' },
    { title: 'Experiencias auténticas', desc: 'Vivencias locales únicas' },
    { title: 'Precios accesibles', desc: 'Calidad sin pagar de más' },
    { title: 'Sostenibilidad', desc: 'Apoyo al turismo local' }
  ];

  return (
    <section className="about-section section-padding" id="nosotros">
      <div className="container">
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} md={12}>
            <div className="about-content">
              <h2>Sobre GOa Hostel</h2>
              <div className="mission-box">
                <span className="quote-mark">"</span>
                <p>
                  GOa nació con una misión clara: ofrecer un hospedaje cálido, 
                  accesible y lleno de experiencias únicas.
                </p>
              </div>
              <p className="about-text">
                En Termas de Río Hondo, creemos que el descanso no debería ser 
                un lujo inalcanzable. Nuestro hostel está diseñado para aventureros, 
                familias y parejas que buscan un refugio donde sentirse como en casa, 
                pero con los beneficios de un servicio de calidad.
              </p>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="values-grid">
              {values.map((val, idx) => (
                <div className="value-item" key={idx}>
                  <div className="value-icon">
                    <CheckOutlined />
                  </div>
                  <div className="value-text">
                    <h4>{val.title}</h4>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSection;
