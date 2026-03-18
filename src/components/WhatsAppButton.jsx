import React from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5493812497721?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-fab"
    >
      <WhatsAppOutlined className="whatsapp-icon" />
      <span className="whatsapp-text">Contactanos</span>
    </a>
  );
};

export default WhatsAppButton;
