import React from 'react';
import { Carousel, Image, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined, HomeOutlined, SmileOutlined, CompassOutlined } from '@ant-design/icons';
import { galleryImages } from '../data/galleryImages';
import './GalleryCarousel.css';

// Custom Arrow Components for Slick Carousel
const PrevArrow = ({ className, style, onClick }) => (
  <button
    className="gallery-arrow gallery-arrow-left"
    onClick={onClick}
    aria-label="Anterior"
  >
    <LeftOutlined />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    className="gallery-arrow gallery-arrow-right"
    onClick={onClick}
    aria-label="Siguiente"
  >
    <RightOutlined />
  </button>
);

const GalleryCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2, // Show 2 images side-by-side on desktop inside the grid split
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false, // Hide arrows on tablets
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  const highlights = [
    {
      icon: <HomeOutlined className="highlight-icon" />,
      title: "Espacios Compartidos",
      desc: "Zonas comunes pensadas para charlar, cocinar y compartir momentos con otros viajeros."
    },
    {
      icon: <SmileOutlined className="highlight-icon" />,
      title: "Confort & Descanso",
      desc: "Habitaciones cómodas y tranquilas equipadas para garantizar un descanso renovador."
    },
    {
      icon: <CompassOutlined className="highlight-icon" />,
      title: "Entorno Termal",
      desc: "Ubicación ideal en Las Termas de Río Hondo para desconectar y disfrutar del agua termal."
    }
  ];

  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery-container">
        <Row gutter={[40, 40]} align="middle" className="gallery-row">
          {/* Left Column: Text Content and Highlights */}
          <Col xs={24} lg={10} className="gallery-text-col">
            <div className="gallery-content-card">
              <span className="gallery-badge">🏡 Galería de Fotos</span>
              <h2>Conocé GOa desde adentro</h2>
              <p className="gallery-description">
                Te invitamos a recorrer nuestros rincones. Diseñamos cada espacio 
                con la calidez de un hogar para que disfrutes de tu estadía en Las Termas de Río Hondo.
              </p>

              <div className="gallery-highlights">
                {highlights.map((item, idx) => (
                  <div className="highlight-item" key={idx}>
                    <div className="highlight-icon-wrapper">
                      {item.icon}
                    </div>
                    <div className="highlight-text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Right Column: Carousel */}
          <Col xs={24} lg={14} className="gallery-carousel-col">
            <div className="gallery-carousel-wrapper">
              <Image.PreviewGroup>
                <Carousel {...carouselSettings} className="gallery-carousel">
                  {galleryImages.map((img) => {
                    const thumbUrl = `${img.url}=w600`;
                    const fullUrl = `${img.url}=w1600`;

                    return (
                      <div key={img.id} className="gallery-slide-item">
                        <div className="gallery-image-card">
                          <Image
                            src={thumbUrl}
                            alt={img.name}
                            className="gallery-image"
                            fallback="https://www.gstatic.com/images/icons/material/system/1x/broken_image_grey600_18dp.png"
                            preview={{
                              src: fullUrl,
                              mask: <div className="gallery-mask">🔍 Ampliar</div>
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </Image.PreviewGroup>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GalleryCarousel;
