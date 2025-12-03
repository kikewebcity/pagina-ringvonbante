import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import './HeroSlider.css';

// ==========================================
// 1. IMPORTACIÓN DE ASSETS
// ==========================================

// --- VIDEO DE INTRO ---
// Asegúrate de que este archivo exista en tu carpeta assets
import videoIntro from '../assets/videointro.mp4'; 

// --- BANNERS DE PRODUCTOS ---
import bannerAnillo from '../assets/banneraccesorios.webp';       
import bannerMoto from '../assets/fotomoto2.webp'; 
import bannerEscultura from '../assets/bannerescultura.webp'; 
import bannerFustes from '../assets/bannerfuste.webp';        
import bannerReciclados from '../assets/reciclado1.webp';     

const HeroSlider = () => {
  const slidesData = [
    // ---------------------------------------------------------
    // 1. INTRO (VIDEO DE FONDO + TEXTO GIGANTE)
    // ---------------------------------------------------------
    {
      id: 1,
      type: 'intro', 
      title: "RINGVONBANTE", // Título gigante
      phrase: "El espíritu indomable. Hecho a mano. Hecho para durar.",
      video: videoIntro, 
    },
    
    // ---------------------------------------------------------
    // 2. PRODUCTOS (DISEÑO PANTALLA DIVIDIDA)
    // ---------------------------------------------------------
    {
      id: 2,
      type: 'product',
      title: "COLECCIÓN ORIGEN",
      subtitle: "Talismanes nacidos de la tierra, forjados en plata para el espíritu.",
      buttonText: "VER PIEZAS",
      link: "/accesorios",
      bgImage: bannerAnillo,
    },
    {
      id: 3,
      type: 'product',
      title: "VOLTAJE RETRO",
      subtitle: "Estética ruidosa. Motor silencioso. El futuro tiene alma clásica.",
      buttonText: "VER MODELOS",
      link: "/motos",
      bgImage: bannerMoto,
    },
    {
      id: 4,
      type: 'product',
      title: "ARTE MONUMENTAL",
      subtitle: "Metal en tensión. Obras que desafían la gravedad y la norma.",
      buttonText: "EXPLORAR GALERÍA",
      link: "/escultura",
      bgImage: bannerEscultura,
    },
    {
      id: 5,
      type: 'product',
      title: "FUSTES & ESTRUCTURA",
      subtitle: "La columna vertebral del diseño. Soporte con carácter y fuerza.",
      buttonText: "VER FUSTES",
      link: "/fustes",
      bgImage: bannerFustes,
    },
    {
      id: 6,
      type: 'product',
      title: "VIDA INDUSTRIAL",
      subtitle: "Resurrección de la materia. Lujo nacido del olvido industrial.",
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
            
            {/* --- CASO A: SLIDE DE INTRO --- */}
            {slide.type === 'intro' ? (
              <div className="slide-content intro-slide" style={{ backgroundColor: '#000' }}>
                  
                  {/* Video de Fondo */}
                  <video 
                    className="video-background"
                    src={slide.video} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                  />
                  
                  {/* Capa oscura (Filtro suave) */}
                  <div className="video-overlay"></div>

                  {/* Contenido Central (TEXTO LIMPIO) */}
                  <div className="intro-content-wrapper">
                      {/* Título de Marca Gigante */}
                      <h1 className="brand-name-slide">{slide.title}</h1>
                      
                      {/* Frase / Slogan */}
                      <h2 className="intro-phrase">{slide.phrase}</h2>
                  </div>
              </div>
            ) : (
              
              // --- CASO B: SLIDES DE PRODUCTOS (SPLIT) ---
              <div className="split-slide-container">
                
                {/* Mitad Izquierda: Imagen */}
                <div 
                  className="split-image-side" 
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                ></div>
                
                {/* Mitad Derecha: Texto */}
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