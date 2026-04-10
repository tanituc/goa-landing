import React from 'react';
import { Card, Row, Col } from 'antd';
import './EscapadasSection.css';

const EscapadasSection = () => {
  const escapadas = [
    { id: 1, icon: '🌹', title: 'ROMÁNTICA', desc: 'Días de descanso y noches románticas con la persona que amás', image: '/images/escapes_section/romantica.webp' },
    { id: 2, icon: '🧉', title: 'AMIGOS', desc: 'Risas, relax y pura diversión', image: '/images/escapes_section/grupal.webp' },
    { id: 3, icon: '🥂', title: 'PAREJAS', desc: 'Más risas, más recuerdos, más experiencias', image: '/images/escapes_section/parejas.webp' },
    { id: 4, icon: '☀️', title: 'DE FINDE', desc: 'Desconectá un toque de la rutina', image: '/images/escapes_section/finde.webp' },
    { id: 5, icon: '👨‍👩‍👧‍👦', title: 'EN GRANDE', desc: 'Si vienen juntos, la diversión se multiplica', image: '/images/escapes_section/asador.webp' },
    { id: 6, icon: '🏍️', title: 'AVENTURA', desc: 'Veni a ver las carreras', image: '/images/escapes_section/motos.webp' },
  ];

  return (
    <section className="section-padding escapadas-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Elegit tu tipo de escapada en Termas de Río Hondo</h2>
          <p>El paquete perfecto para cada ocasión</p>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {escapadas.map(item => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <div className="escapada-flip-card">
                <div className="escapada-flip-inner">
                  <div className="escapada-flip-front">
                    <Card className="escapada-card" bordered={false}>
                      <div className="escapada-icon">{item.icon}</div>
                      <h4 className="escapada-title">{item.title}</h4>
                      <p className="escapada-desc">{item.desc}</p>
                    </Card>
                  </div>
                  <div className="escapada-flip-back" style={{ backgroundImage: `url(${item.image})` }}>
                    <div className="escapada-flip-back-overlay">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default EscapadasSection;
