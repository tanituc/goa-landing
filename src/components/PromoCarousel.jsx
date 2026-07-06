import React from 'react';
import { Carousel, Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import './PromoCarousel.css';

const PromoCarousel = () => {
  const slides = [
    {
      id: 1,
      image: '/images/promo_section/descanso.webp',
      badge: '😴 Descanso',
      title: 'Habitaciones privadas para desconectar de verdad',
      desc: 'Confort real, silencio y espacio propio para bajar el ritmo',
      price: '',
      link: 'https://wa.me/5493812497721?text=Hola,%20me%20interesa%20la%20opci%C3%B3n%20de%20Descanso',
    },
    {
      id: 2,
      image: '/images/promo_section/conexion.webp',
      badge: '🗣️ Conexión',
      title: 'Espacios pensados para encontrarse',
      desc: 'Ambientes compartidos que invitan a charlar, cocinar y coincidir',
      price: '',
      link: 'https://wa.me/5493812497721?text=Hola,%20me%20interesa%20la%20opci%C3%B3n%20de%20Conexi%C3%B3n',
    },
    {
      id: 3,
      image: '/images/escapes_section/parejas.webp',
      badge: '🌊 Relax',
      title: 'Agua termal y tiempo sin apuro',
      desc: 'Un refugio para soltar el cuerpo y dejar que el día fluya',
      price: '',
      link: 'https://wa.me/5493812497721?text=Hola,%20me%20interesa%20la%20opci%C3%B3n%20de%20Relax',
    },
    {
      id: 4,
      image: '/images/promo_section/autonomia.webp',
      badge: '🍳 Autonomía',
      title: 'Libertad para vivir a tu manera',
      desc: 'Cocina equipada y dinámica flexible, sin horarios rígidos',
      price: '',
      link: 'https://wa.me/5493812497721?text=Hola,%20me%20interesa%20la%20opci%C3%B3n%20de%20Autonom%C3%ADa',
    },
    {
      id: 5,
      image: '/images/promo_section/naturaleza.webp',
      badge: '🍃 Naturaleza',
      title: 'Un entorno que baja el volumen',
      desc: 'Verde, aire y caminatas para reconectar con lo simple',
      price: '',
      link: 'https://wa.me/5493812497721?text=Hola,%20me%20interesa%20la%20opci%C3%B3n%20de%20Naturaleza',
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
