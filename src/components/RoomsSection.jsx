import React from 'react';
import { Card, Row, Col, Space, Carousel, Image } from 'antd';
import { CheckCircleOutlined, WhatsAppOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './RoomsSection.css';

const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      name: 'Suite Relax',
      tagline: 'El refugio perfecto para quienes buscan privacidad y confort absoluto.',
      oldPrice: '$100.000',
      newPrice: '$50.000',
      priceUnit: '/ noche',
      priceNote: '(para 2 personas en estadías de 2 o más noches)',
      extraNote: '(opcional, suma conversión):',
      extraOption: 'Consultanos por opciones para más personas',
      extraOptionLink: 'https://wa.me/5493812497721?text=Hola,%20me%20gustar%C3%ADa%20consultar%20por%20opciones%20para%20m%C3%A1s%20personas%20en%20la%20Suite%20Relax',
      features: ['Cama doble', 'Ambiente silencioso', 'Iluminación natural'],
      images: [
        '/images/rooms_section/suite_1.webp',
        '/images/rooms_section/suite_2.webp',
        '/images/rooms_section/suite_3.webp'
      ],
      wpMessage: 'Suite Relax'
    },
    {
      id: 2,
      name: 'Descanso del Viajero',
      tagline: 'La opción perfecta para aventureros y viajeros que buscan comodidad a un precio accesible.',
      oldPrice: '$35.000',
      newPrice: '$25.000',
      priceUnit: '/ persona / noche',
      priceNote: '(precio para grupos o estadías de 2 o más noches)',
      features: ['Espacio práctico y cómodo', 'Excelente relación calidad-precio', 'Accesible a puntos turísticos'],
      images: [
        '/images/rooms_section/individual_1.webp',
        '/images/rooms_section/individual_2.webp',
        '/images/rooms_section/individual_3.webp'
      ],
      wpMessage: 'Descanso del Viajero'
    }
  ];

  return (
    <section className="rooms-section section-padding" id="habitaciones">
      <div className="container">
        <div className="section-header text-center">
          <h2>Nuestras Habitaciones</h2>
          <p>Confort y relax al mejor precio</p>
        </div>

        <Row gutter={[30, 30]} justify="center">
          {rooms.map(room => (
            <Col xs={24} md={12} key={room.id}>
              <Card
                className="room-card"
                hoverable
                variant="borderless"
                cover={
                  <Image.PreviewGroup>
                    <Carousel swipeToSlide draggable infinite={false} className="room-carousel">
                      {room.images.map((img, index) => (
                        <div key={index}>
                          <Image
                            src={img}
                            alt={`${room.name} ${index + 1}`}
                            className="room-image"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </Image.PreviewGroup>
                }
              >
                <div className="room-content">
                  <h3>{room.name}</h3>
                  <p className="room-tagline">{room.tagline}</p>

                  <ul className="room-features">
                    {room.features.map((feat, i) => (
                      <li key={i}><CheckCircleOutlined className="feat-icon" /> {feat}</li>
                    ))}
                  </ul>

                  <div className="room-price-section">
                    <span className="room-price-label">Precio:</span>
                    <div className="room-price-details">
                      {room.oldPrice && <span className="room-old-price">{room.oldPrice}</span>}
                      <div className="room-new-price-row">
                        <span className="room-new-price">{room.newPrice}</span>
                        <span className="room-price-unit"> {room.priceUnit}</span>
                      </div>
                      {room.priceNote && <span className="room-price-note">{room.priceNote}</span>}
                    </div>

                    {room.extraNote && (
                      <div className="room-extra-section">
                        <span className="room-extra-note">{room.extraNote}</span>
                        {room.extraOption && (
                          <a
                            href={room.extraOptionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="room-extra-option"
                          >
                            💬 {room.extraOption}
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="room-actions">
                    <a
                      href={`https://wa.me/5493812497721?text=Hola,%20me%20gustar%C3%ADa%20reservar%20la%20habitaci%C3%B3n%20${encodeURIComponent(room.wpMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="room-btn-primary"
                    >
                      <WhatsAppOutlined /> Reservar ahora
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default RoomsSection;
