import React from 'react';
import './Pages.css'; 

const Privacidad = () => {
  return (
    <div className="page-container" style={{paddingTop: '120px'}}>
      
      <div className="legal-content">
        <h1>POLÍTICA DE PRIVACIDAD</h1>
        <p className="last-updated">Última actualización: Noviembre 2025</p>

        <section>
          <h3>1. INFORMACIÓN GENERAL</h3>
          <p>
            En <strong>RINGVONBANTE</strong>, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. 
            Esta política explica cómo tratamos la información cuando visitas nuestro sitio web.
          </p>
        </section>

        <section>
          <h3>2. DATOS QUE RECOLECTAMOS</h3>
          <p>
            Actualmente, este sitio web funciona principalmente como un catálogo digital. 
            No recolectamos datos bancarios ni procesamos pagos directamente en la web.
            <br/><br/>
            Los únicos datos que podríamos recibir son los que tú nos proporcionas voluntariamente al:
            <ul>
              <li>Contactarnos vía WhatsApp.</li>
              <li>Enviarnos un correo electrónico.</li>
              <li>Suscribirte a nuestro boletín (si aplica).</li>
            </ul>
          </p>
        </section>

        <section>
          <h3>3. USO DE COOKIES</h3>
          <p>
            Utilizamos cookies esenciales para mejorar la experiencia de navegación. 
            No utilizamos cookies de rastreo invasivo ni vendemos tu información a terceros.
          </p>
        </section>

        <section>
          <h3>4. CONTACTO</h3>
          <p>
            Si tienes dudas sobre nuestra política de privacidad, puedes escribirnos a:<br/>
            <strong>contacto@ringvonbante.com</strong>
          </p>
        </section>

      </div>
    </div>
  );
};

export default Privacidad;