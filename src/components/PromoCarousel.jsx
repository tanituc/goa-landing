import React from 'react';
import { Carousel, Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import './PromoCarousel.css';

const PromoCarousel = () => {
  const slides = [
    {
      id: 1,
      image: '/images/IMG_7869-scaled-1024x576.jpg',
      badge: '🏍️ MotoGP 2025',
      title: 'Asegura tu Hostel en Termas',
      desc: 'Disfruta 4 noches por el precio de 2 con desayuno y pileta',
      price: '',
      link: 'https://wa.me/5493812497721?text=Hola,%20quiero%20info%20sobre%20la%20promo%20MotoGP',
    },
    {
      id: 2,
      image: '/images/IMG_7681-scaled-1024x576.jpg',
      badge: '🌊 Promo Relax',
      title: 'Suite Relax',
      desc: 'El refugio perfecto para quienes buscan privacidad y confort absoluto.',
      price: '$50.000 / noche',
      oldPrice: '$100.000',
      link: 'https://wa.me/5493812497721?text=Hola,%20me%20interesa%20la%20Suite%20Relax',
    },
    {
      id: 3,
      image: '/images/DOBLE-scaled-1024x576.jpg',
      badge: '🛏️ Promo Aventureros',
      title: 'Descanso del Viajero',
      desc: 'Comodidad a un precio accesible. Espacio práctico y excelente relación calidad-precio.',
      price: '$35.000 / noche / pers',
      oldPrice: '$100.000',
      link: 'https://wa.me/5493812497721?text=Hola,%20me%20interesa%20Descanso%20del%20Viajero',
    },
    {
      id: 4,
      image: '/images/IMG_7375-scaled-1024x576.jpg',
      badge: '🌮 Escapada',
      title: 'Desconectá de la rutina',
      desc: 'El paquete perfecto para cada ocasión. Vení con amigos, pareja o familia.',
      price: '',
      link: 'https://wa.me/5493812497721?text=Hola,%20quiero%20hacer%20una%20escapada',
    }
  ];

  return (
    <section className="promos" id="promociones">
      <Carousel autoplay effect="fade">
        {slides.map(slide => (
          <div key={slide.id}>
            <div className="carousel-slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <span className="slide-badge">{slide.badge}</span>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
                {slide.price && (
                  <div className="slide-prices">
                    {slide.oldPrice && <span className="price-old">{slide.oldPrice}</span>}
                    <span className="price-new">{slide.price} AHORA</span>
                  </div>
                )}
                <Button
                  type="primary"
                  size="large"
                  icon={<WhatsAppOutlined />}
                  href={slide.link}
                  target="_blank"
                  className="slide-cta"
                >
                  Consultar Promoción
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default PromoCarousel;
