import React from 'react';

const LocationSection = () => {
  return (
    <section className="location-section" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <div className="container section-padding" style={{ paddingBottom: '30px', paddingTop: '100px', flexShrink: 0 }}>
        <div className="section-header text-center">
          <h2>GOa – La mejor ubicación</h2>
          <p>Extensión Av. JF Ibarra, 4220, Las Termas de Río Hondo</p>
        </div>
      </div>
      <div className="map-container" style={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.975797379893!2d-64.8687748!3d-27.4912646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94270c006ed6eff7%3A0x6bba46c533e4b1a4!2sGOa%20Hostel!5e0!3m2!1sen!2sar!4v1710712345678!5m2!1sen!2sar" 
          width="100%" 
          style={{ border: 0, flexGrow: 1 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación GOa Hostel"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
