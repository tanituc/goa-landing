import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const navLinks = [
    { title: 'Inicio', href: '#' },
    { title: 'Habitaciones', href: '#habitaciones' },
    { title: 'Servicios', href: '#servicios' },
    { title: 'Nosotros', href: '#nosotros' },
  ];

  const getLogoSrc = () => {
    return "/images/cropped-GOA_LOGO_BLANCO_NOTEXTO-300x300.png";
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img 
            src={getLogoSrc()} 
            alt="GOA Hostel Logo" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="nav-link">
              {link.title}
            </a>
          ))}
          <a
            href="https://wa.me/5493812497721?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta-btn"
          >
            Reserva Ahora!
          </a>
        </div>

        {/* Mobile Hamburger */}
        <Button
          className="navbar-hamburger"
          type="text"
          icon={<MenuOutlined style={{ color: '#fff', fontSize: '24px' }} />}
          onClick={showDrawer}
        />

        {/* Mobile Drawer */}
        <Drawer
          title={<img src="/images/cropped-LOGO_AZUL_NOTEXTO_FONDO-150x150.png" alt="GOA Logo" style={{ height: 40 }} />}
          placement="right"
          onClose={onClose}
          open={visible}
        >
          <div className="drawer-nav">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="drawer-link" onClick={onClose}>
                {link.title}
              </a>
            ))}
            <a
              href="https://wa.me/5493812497721?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-cta-btn"
            >
              Reserva Ahora!
            </a>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
