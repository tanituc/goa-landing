import React, { useState, useEffect, useRef } from 'react';
import { Card, Row, Col } from 'antd';
import './EscapadasSection.css';

const FLIP_DURATION   = 1800; // ms que la card queda mostrando la imagen
const CYCLE_INTERVAL  = 2800; // ms entre cada card que se voltea

const EscapadasSection = () => {
  const escapadas = [
    { id: 1, icon: '🌹', title: 'ROMÁNTICA', desc: 'Días de descanso y noches románticas con la persona que amás', image: '/images/escapes_section/romantica.webp' },
    { id: 2, icon: '🧉', title: 'AMIGOS', desc: 'Risas, relax y pura diversión', image: '/images/escapes_section/grupal.webp' },
    { id: 3, icon: '🥂', title: 'PAREJAS', desc: 'Más risas, más recuerdos, más experiencias', image: '/images/escapes_section/parejas.webp' },
    { id: 4, icon: '☀️', title: 'DE FINDE', desc: 'Desconectá un toque de la rutina', image: '/images/escapes_section/finde.webp' },
    { id: 5, icon: '👨‍👩‍👧‍👦', title: 'EN GRANDE', desc: 'Si vienen juntos, la diversión se multiplica', image: '/images/escapes_section/asador.webp' },
    { id: 6, icon: '🏍️', title: 'AVENTURA', desc: 'Veni a ver las carreras', image: '/images/escapes_section/motos.webp' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const flipBackTimer = useRef(null);
  const cycleIndex    = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const idx = cycleIndex.current % escapadas.length;
      cycleIndex.current += 1;

      setActiveIndex(idx);

      // Voltear de regreso después de FLIP_DURATION
      clearTimeout(flipBackTimer.current);
      flipBackTimer.current = setTimeout(() => {
        setActiveIndex(null);
      }, FLIP_DURATION);
    }, CYCLE_INTERVAL);

    return () => {
      clearInterval(interval);
      clearTimeout(flipBackTimer.current);
    };
  }, []);

  return (
    <section className="section-padding escapadas-section" id="escapadas">
      <div className="container">
        <div className="section-header text-center">
          <h2>Elegit tu tipo de escapada en Termas de Río Hondo</h2>
          <p>El paquete perfecto para cada ocasión</p>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {escapadas.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <div className={`escapada-flip-card${activeIndex === index ? ' auto-flipped' : ''}`}>
                <div className="escapada-flip-inner">
                  <div className="escapada-flip-front">
                    <Card className="escapada-card" variant="borderless">
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
