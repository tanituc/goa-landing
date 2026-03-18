import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>HOSTEL EN TERMAS DE RÍO HONDO</h1>
        <h2>Confort y Relax al Mejor Precio</h2>
        <p>Viví la mejor experiencia en aguas termales, con habitaciones cómodas y servicios premium.</p>
        <a 
          href="https://wa.me/5493812497721?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Reserva Ahora!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
