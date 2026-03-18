import React from 'react';
import { Card, Row, Col } from 'antd';
import './EscapadasSection.css';

const EscapadasSection = () => {
  const escapadas = [
    { id: 1, icon: '🥂', title: 'ESCAPADA CON TU PAREJA AMIGA', desc: 'Más risas, más recuerdos, más experiencias' },
    { id: 2, icon: '🎉', title: 'ESCAPADA ÉPICA CON AMIGOS', desc: 'Risas, relax y pura diversión' },
    { id: 3, icon: '❤️', title: 'ESCAPADA ROMÁNTICA', desc: 'Días de descanso y noches románticas con la persona que amás' },
    { id: 4, icon: '🎒', title: 'ESCAPADA DE FINDE', desc: 'Desconectá un toque de la rutina' },
    { id: 5, icon: '👨‍👩‍👧‍👦', title: 'ESCAPADA CON QUIENES QUIERAS', desc: 'Si vienen juntos, la diversión se multiplica' },
  ];

  return (
    <section className="section-padding escapadas-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Tu escapada ideal en Termas de Río Hondo</h2>
          <p>El paquete perfecto para cada ocasión</p>
        </div>
        
        <Row gutter={[24, 24]} justify="center">
          {escapadas.map(item => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <Card className="escapada-card" hoverable bordered={false}>
                <div className="escapada-icon">{item.icon}</div>
                <h4 className="escapada-title">{item.title}</h4>
                <p className="escapada-desc">{item.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default EscapadasSection;
