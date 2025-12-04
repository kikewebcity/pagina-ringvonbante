import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './InstagramFeed.css';

// --- IMPORTA 4 O 6 FOTOS DE TUS ASSETS QUE TENGAS EN INSTAGRAM ---
// (Reusa las que ya tienes o sube nuevas capturas de tu IG)
import img1 from '../assets/acce7.webp';
import img2 from '../assets/escu2.webp';
import img3 from '../assets/fuste7.webp';
import img4 from '../assets/reciclado3.webp';

const InstagramFeed = () => {
  
  // Tu enlace de perfil
  const instagramUrl = "https://www.instagram.com/ringvonbante";

  const posts = [
    { id: 1, img: img1, link: instagramUrl }, // Puedes poner links a posts específicos si quieres
    { id: 2, img: img2, link: instagramUrl },
    { id: 3, img: img3, link: instagramUrl },
    { id: 4, img: img4, link: instagramUrl },
  ];

  return (
    <section className="insta-section">
      
      <div className="insta-header">
        <FaInstagram className="insta-icon-title" />
        <h2>SÍGUENOS EN @RINGVONBANTE</h2>
        <a href={instagramUrl} target="_blank" rel="noreferrer" className="insta-link">
          VER PERFIL
        </a>
      </div>

      <div className="insta-grid">
        {posts.map((post) => (
          <a 
            key={post.id} 
            href={post.link} 
            target="_blank" 
            rel="noreferrer" 
            className="insta-item"
          >
            <img src={post.img} alt="Instagram Post" />
            <div className="insta-overlay">
              <FaInstagram size={30} />
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default InstagramFeed;