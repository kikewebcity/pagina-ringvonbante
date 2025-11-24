import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import './HeroSlider.css';

// ==========================================
// 1. IMPORTACIÓN DE IMÁGENES
// ==========================================
import logoImg from '../assets/logoring.jpg';

// Fondo Intro
const bannerIntro = "https://www.transparenttextures.com/patterns/black-felt.png";

// Productos
import bannerAnillo from '../assets/banneraccesorios.webp';       
import bannerMoto from '../assets/bannermoto.webp'; 
import bannerEscultura from '../assets/bannerescultura.webp'; 
import bannerFustes from '../assets/bannerfuste.webp';        
import bannerReciclados from '../assets/bannerreciclados.webp';     


const HeroSlider = () => {
  const slidesData = [
    // --- 1. INTRO (Este se queda igual, pantalla completa) ---
    {
      id: 1,
      type: 'intro', 
      logo: logoImg, 
      phrase: "El espíritu indomable. Hecho a mano. Hecho para durar.",
      bgImage: bannerIntro
    },
    // --- 2. ACCESORIOS ---
    {
      id: 2,
      type: 'product',
      title: "COLECCIÓN ORIGEN",
      subtitle: "Talismanes nacidos de la tierra, forjados en plata para el espíritu.",
      buttonText: "VER PIEZAS",
      link: "/accesorios",
      bgImage: bannerAnillo,
    },
    // --- 3. MOTOS ELÉCTRICAS ---
    {
      id: 3,
      type: 'product',
      title: "VOLTAJE RETRO",
      subtitle: "Estética ruidosa. Motor silencioso. El futuro tiene alma clásica.",
      buttonText: "VER MODELOS",
      link: "/motos",
      bgImage: bannerMoto,
    },
    // --- 4. ESCULTURAS ---
    {
      id: 4,
      type: 'product',
      title: "ARTE MONUMENTAL",
      subtitle: "Metal en tensión. Obras que desafían la gravedad y la norma.",
      buttonText: "EXPLORAR GALERÍA",
      link: "/escultura",
      bgImage: bannerEscultura,
    },
    // --- 5. FUSTES ---
    {
      id: 5,
      type: 'product',
      title: "FUSTES & ESTRUCTURA",
      subtitle: "La columna vertebral del diseño. Soporte con carácter y fuerza.",
      buttonText: "VER FUSTES",
      link: "/fustes",
      bgImage: bannerFustes,
    },
    // --- 6. RECICLADOS ---
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
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {slide.type === 'intro' ? (
              // --- SLIDE INTRO (Pantalla Completa) ---
              <div className="slide-content intro-slide" style={{ backgroundImage: `url(${slide.bgImage})`, backgroundColor: '#111' }}>
                  <div className="intro-content-wrapper">
                      <img src={slide.logo} alt="Ringbonvante Logo" className="animated-logo" style={{maxWidth: '300px'}} />
                      <h2 className="intro-phrase">{slide.phrase}</h2>
                  </div>
              </div>
            ) : (
              // --- SLIDE PRODUCTO (DIVIDIDO 50/50) ---
              <div className="split-slide-container">
                
                {/* Lado Izquierdo: IMAGEN */}
                <div 
                  className="split-image-side" 
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                ></div>

                {/* Lado Derecho: TEXTO */}
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