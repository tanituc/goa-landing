import React from 'react';
import { Row, Col } from 'antd';
import { CoffeeOutlined, WifiOutlined, ExpandOutlined, CarOutlined, InboxOutlined } from '@ant-design/icons';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    { id: 1, icon: <CoffeeOutlined />, text: 'Desayuno incluido' },
    { id: 2, icon: <WifiOutlined />, text: 'Wi-Fi de alta velocidad' },
    { id: 3, icon: <ExpandOutlined />, text: 'Pileta de aguas termales' },
    { id: 4, icon: <CarOutlined />, text: 'Estacionamiento gratuito' },
    { id: 5, icon: <InboxOutlined />, text: 'Baños privados' },
  ];

  return (
    <section className="services-section section-padding" id="servicios">
      <div className="container">
        <div className="section-header text-center text-white">
          <h2>Servicios exclusivos</h2>
          <p>Tu estadía perfecta en Termas de Río Hondo</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div className="service-item" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <p className="service-text">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
