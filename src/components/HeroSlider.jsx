import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import './HeroSlider.css';


// --- IMÁGENES DE EJEMPLO (VARIABLES) ---
// Úsalas mientras subes las tuyas
const logoImg = "https://via.placeholder.com/300x100/000000/ffffff?text=RINGBONVANTE";
const introBg = "https://www.transparenttextures.com/patterns/black-felt.png";
const accesorioImg = "src/assets/banneranillo.webp"; 
const motoImg = "src/assets/bannermoto.webp";
const esculturaImg = "src/assets/escultura.webp";
const fustesImg = "src/assets/Bannerfuste.webp"; 
const recicladosImg = "src/assets/reciclados.webp";


const HeroSlider = () => {
  const slidesData = [
    // --- 1. INTRO ---
    {
      id: 1,
      type: 'intro', 
      logo: logoImg,
      phrase: "El espíritu indomable. Hecho a mano. Hecho para durar.",
      bgImage: introBg
    },
    // --- 2. ACCESORIOS ---
    {
      id: 2,
      type: 'product',
      title: "COLECCIÓN ORIGEN",
      subtitle: "Talismanes nacidos de la tierra, forjados en plata para el espíritu.",
      buttonText: "VER PIEZAS",
      link: "/accesorios",
      bgImage: accesorioImg,
      textPosition: 'right'
    },
    // --- 3. MOTOS ELÉCTRICAS ---
    {
      id: 3,
      type: 'product',
      title: "VOLTAJE RETRO",
      subtitle: "Estética ruidosa. Motor silencioso. El futuro tiene alma clásica.",
      buttonText: "VER MODELOS",
      link: "/motos",
      bgImage: motoImg, 
      textPosition: 'right'
    },
    // --- 4. ESCULTURAS ---
    {
      id: 4,
      type: 'product',
      title: "ARTE MONUMENTAL",
      subtitle: "Metal en tensión. Obras que desafían la gravedad y la norma.",
      buttonText: "EXPLORAR GALERÍA",
      link: "/escultura",
      bgImage: esculturaImg,
      textPosition: 'right'
    },
    // --- 5. FUSTES (NUEVO) ---
    {
      id: 5,
      type: 'product',
      title: "FUSTES & ESTRUCTURA",
      subtitle: "La columna vertebral del diseño. Soporte con carácter y fuerza.",
      buttonText: "VER FUSTES",
      link: "/fustes",
      bgImage: fustesImg, // Asegúrate de cambiar esta imagen
      textPosition: 'right'
    },
    // --- 6. RECICLADOS (NUEVO) ---
    {
      id: 6,
      type: 'product',
      title: "VIDA INDUSTRIAL",
      subtitle: "Resurrección de la materia. Lujo nacido del olvido industrial.",
      buttonText: "VER PROYECTOS",
      link: "/reciclados",
      bgImage: recicladosImg, // Asegúrate de cambiar esta imagen
      textPosition: 'right'
    },
  ];

  return (
    <section className="hero-slider-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={'fade'}
        navigation={true}
        pagination={{ clickable: true }}
        // Aumenté un poco el tiempo (7s) para que de tiempo a leer
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {slide.type === 'intro' ? (
              <div className="slide-content intro-slide" style={{ backgroundImage: `url(${slide.bgImage})`, backgroundColor: '#111' }}>
                  <div className="intro-content-wrapper">
                      <h1 className="brand-name-slide">RINGBONVANTE</h1>
                      <h2 className="intro-phrase">{slide.phrase}</h2>
                  </div>
              </div>
            ) : (
              <div className="slide-content product-slide" style={{ backgroundImage: `url(${slide.bgImage})` }}>
                {/* Clase dinámica para posición (pos-right) */}
                <div className={`slide-overlay pos-${slide.textPosition || 'center'}`}>
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