import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import './HeroSlider.css';

// ==========================================
// 1. IMPORTACIONES
// ==========================================

// --- TU LOGO NUEVO (PNG Transparente) ---
import logoBlanco from '../assets/logoblanco.png'; 

// --- VIDEO INTRO ---
import videoIntro from '../assets/videointro.mp4'; 

// --- IMÁGENES PRODUCTOS ---
import bannerAnillo from '../assets/banneranillo.webp';       
import bannerMoto from '../assets/tanque.webp'; 
import bannerEscultura from '../assets/bannerescultura.webp'; 
import bannerFustes from '../assets/bannerfuste.webp';        
import bannerReciclados from '../assets/reciclados.webp';     

const HeroSlider = () => {
  const slidesData = [
    // --- 1. INTRO (VIDEO + LOGO FLOTANTE) ---
    {
      id: 1,
      type: 'intro', 
      phrase: "El espíritu indomable. Hecho a mano. Hecho para durar.",
      video: videoIntro, 
      logo: logoBlanco, // Usamos la variable del logo aquí
    },
    
    // --- 2. PRODUCTOS ---
    {
      id: 2,
      type: 'product',
      title: "COLECCIÓN ORIGEN",
      subtitle: "Talismanes nacidos de la tierra, forjados en plata.",
      buttonText: "VER PIEZAS",
      link: "/accesorios",
      bgImage: bannerAnillo,
    },
    {
      id: 3,
      type: 'product',
      title: "VOLTAJE RETRO",
      subtitle: "Estética ruidosa. Motor silencioso.",
      buttonText: "VER MODELOS",
      link: "/motos",
      bgImage: bannerMoto,
    },
    {
      id: 4,
      type: 'product',
      title: "ARTE MONUMENTAL",
      subtitle: "Metal en tensión. Obras que desafían la gravedad.",
      buttonText: "EXPLORAR GALERÍA",
      link: "/escultura",
      bgImage: bannerEscultura,
    },
    {
      id: 5,
      type: 'product',
      title: "FUSTES & ESTRUCTURA",
      subtitle: "La columna vertebral del diseño.",
      buttonText: "VER FUSTES",
      link: "/fustes",
      bgImage: bannerFustes,
    },
    {
      id: 6,
      type: 'product',
      title: "VIDA INDUSTRIAL",
      subtitle: "Resurrección de la materia. Lujo cyberpunk.",
      buttonText: "VER PROYECTOS",
      link: "/reciclados",
      bgImage: bannerReciclados,
    }
  ];

  return (
    <section className="hero-slider-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={'fade'}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            
            {/* --- LÓGICA PARA EL SLIDE DE INTRO --- */}
            {slide.type === 'intro' ? (
              <div className="slide-content intro-slide" style={{ backgroundColor: '#000' }}>
                  
                  {/* VIDEO DE FONDO */}
                  <video 
                    className="video-background"
                    src={slide.video} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                  />
                  
                  {/* CAPA OSCURA (Para que resalte el logo) */}
                  <div className="video-overlay"></div>

                  {/* CONTENIDO CENTRAL */}
                  <div className="intro-content-wrapper">
                      
                      {/* --- AQUÍ ESTÁ EL LOGO --- */}
                      <img 
                        src={slide.logo} 
                        alt="Ringvonbante" 
                        className="animated-logo" 
                        // Ajusta el ancho (width) según qué tan grande lo quieras
                        style={{ maxWidth: '400px', width: '80%', height: 'auto', marginBottom: '20px' }} 
                      />
                      
                      {/* Frase abajo del logo */}
                      <h2 className="intro-phrase">{slide.phrase}</h2>
                  </div>
              </div>
            ) : (
              
              // --- LÓGICA PARA PRODUCTOS (Igual que antes) ---
              <div className="split-slide-container">
                <div 
                  className="split-image-side" 
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                ></div>
                <div className="split-text-side">
                    <div className="product-content-wrapper">
                        <h3>{slide.title}</h3>
                        <div className="subtitle-divider"></div>
                        <p>{slide.subtitle}</p>
                        <a href={slide.link} className="slide-btn">{slide.buttonText}</a>
                    </div>
                </div>
              </div>

            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;