import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PromoCarousel from './components/PromoCarousel'
import EscapadasSection from './components/EscapadasSection'
import ServicesSection from './components/ServicesSection'
import RoomsSection from './components/RoomsSection'
import AboutSection from './components/AboutSection'
import LocationSection from './components/LocationSection'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="snap-container">
        <div className="snap-section"><HeroSection /></div>
        <div className="snap-section"><PromoCarousel /></div>
        <div className="snap-section"><EscapadasSection /></div>
        <div className="snap-section"><ServicesSection /></div>
        <div className="snap-section"><RoomsSection /></div>
        <div className="snap-section"><AboutSection /></div>
        <div className="snap-section" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <LocationSection />
          <Footer />
        </div>
      </main>
      <WhatsAppButton />
    </div>
  )
}

export default App
