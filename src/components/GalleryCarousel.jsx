import React from 'react';
import { Carousel, Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
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
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
    draggable: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on smaller screens for better mobile experience
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery-container">
        <div className="gallery-header text-center">
          <h2>Galería de Fotos</h2>
          <p>Explorá nuestra casa, los espacios comunes y el entorno natural de Colón</p>
        </div>

        <div className="gallery-carousel-wrapper">
          <Image.PreviewGroup>
            <Carousel {...carouselSettings} className="gallery-carousel">
              {galleryImages.map((img) => {
                // Optimize loading performance:
                // =w600 for inline slider thumbnail (fast loading)
                // =w1600 for the full screen preview lightbox (high quality)
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
      </div>
    </section>
  );
};

export default GalleryCarousel;
