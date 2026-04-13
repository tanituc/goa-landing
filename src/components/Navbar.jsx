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
    { title: 'Inicio', href: '#inicio' },
    { title: 'Promociones', href: '#promociones' },
    { title: 'Escapadas', href: '#escapadas' },
    { title: 'Habitaciones', href: '#habitaciones' },
    { title: 'Servicios', href: '#servicios' },
    { title: 'Nosotros', href: '#nosotros' },
    { title: 'Ubicación', href: '#ubicacion' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href === '#inicio') {
      const container = document.querySelector('.snap-container');
      if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getLogoSrc = () => {
    return "/images/cropped-GOA_LOGO_BLANCO_NOTEXTO-300x300.png";
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a
          href="#inicio"
          className="navbar-logo"
          onClick={(e) => scrollToSection(e, '#inicio')}
        >
          <img
            src={getLogoSrc()}
            alt="GOA Hostel Logo"
          />
        </a>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="nav-link" onClick={(e) => scrollToSection(e, link.href)}>
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
          title={''}
          placement="right"
          onClose={onClose}
          open={visible}
        >
          <div className="drawer-nav">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="drawer-link" onClick={(e) => { scrollToSection(e, link.href); onClose(); }}>
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
