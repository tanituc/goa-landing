import React from 'react';

const LocationSection = () => {
  return (
    <section className="location-section" id="ubicacion" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <div className="container section-padding" style={{ paddingBottom: '30px', paddingTop: '100px', flexShrink: 0 }}>
        <div className="section-header text-center">
          <h2>GOa – La mejor ubicación</h2>
          <p>Extensión Av. JF Ibarra, 4220, Las Termas de Río Hondo</p>
        </div>
      </div>
      <div className="map-and-reviews-container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', flexGrow: 1, gap: '30px', padding: '0 20px', boxSizing: 'border-box', marginBottom: '30px' }}>
        <div className="map-container" style={{ flex: '1 1 calc(50% - 15px)', minWidth: '320px', display: 'flex', flexDirection: 'column', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eaeaea', height: '500px', boxSizing: 'border-box', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.186112367904!2d-64.88184272277857!3d-27.525676519096876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94236f47796f6f35%3A0x174f6040f2846aca!2sGOa%20Hospedajes!5e0!3m2!1sen!2sar!4v1775864596933!5m2!1sen!2sar"
            width="100%"
            height="100%"
            style={{ border: 0, flexGrow: 1 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación GOa Hospedajes"
          ></iframe>
        </div>
        <div className="reviews-container" style={{ flex: '1 1 calc(50% - 15px)', minWidth: '320px', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa', borderRadius: '12px', padding: '30px', border: '1px solid #eaeaea', height: '500px', boxSizing: 'border-box', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#202124' }}>Experiencia de nuestros huéspedes</h3>
            <svg viewBox="0 0 24 24" width="28" height="28" style={{ flexShrink: 0 }}>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>

          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '15px', overflowY: 'auto', paddingRight: '5px' }}>
            {/* Review Card 1 */}
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#4285F4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>M</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px', color: '#202124' }}>Maria Laura</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#70757a' }}>Hace 2 semanas</p>
                </div>
              </div>
              <div style={{ color: '#FBBC05', fontSize: '16px', marginBottom: '6px', letterSpacing: '1px' }}>★★★★★</div>
              <p style={{ margin: 0, fontSize: '14px', color: '#4d5156', lineHeight: '1.5' }}>"Excelente lugar, todo muy limpio y ordenado. La ubicación es perfecta para recorrer Termas. La atención de los dueños impecable. ¡Volveremos!"</p>
            </div>

            {/* Review Card 2 */}
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#34A853', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>J</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px', color: '#202124' }}>Juan C.</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#70757a' }}>Hace un mes</p>
                </div>
              </div>
              <div style={{ color: '#FBBC05', fontSize: '16px', marginBottom: '6px', letterSpacing: '1px' }}>★★★★★</div>
              <p style={{ margin: 0, fontSize: '14px', color: '#4d5156', lineHeight: '1.5' }}>"Muy buena relación precio-calidad. Habitaciones súper cómodas y un ambiente muy tranquilo para descansar."</p>
            </div>
            
            {/* Review Card 3 */}
            <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#EA4335', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>P</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px', color: '#202124' }}>Patricia G.</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#70757a' }}>Hace 2 meses</p>
                </div>
              </div>
              <div style={{ color: '#FBBC05', fontSize: '16px', marginBottom: '6px', letterSpacing: '1px' }}>★★★★★</div>
              <p style={{ margin: 0, fontSize: '14px', color: '#4d5156', lineHeight: '1.5' }}>"Hermoso hospedaje. Todo impecable, nos hicieron sentir como en casa. Sin dudas la mejor opción en Termas."</p>
            </div>
          </div>
          
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <a 
              href="https://www.google.com/travel/hotels/entity/CgoIytWRlI-I2KcXEAE/reviews?q=goa%20termas&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C121529349%2C121608706&hl=es-419&gl=ar&cs=1&ssta=1&ts=CAEaSQorEicyJTB4OTQyMzZmNDc3OTZmNmYzNToweDE3NGY2MDQwZjI4NDZhY2EaABIaEhQKBwjqDxAEGBwSBwjqDxAEGB0YATICEAAqBAoAGgA&qs=CAE4AkIJCcpqhPJAYE8XQgkJymqE8kBgTxc&ictx=111&utm_campaign=sharing&utm_medium=link&utm_source=htls" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#1a73e8', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 20px',
                borderRadius: '8px',
                backgroundColor: '#e8f0fe',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#d2e3fc'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#e8f0fe'}
            >
              Ver todas las reseñas en Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
