import { useEffect, useState } from 'react';

import pointsImage from '../../assets/images/im-points800.webp';
import mountainImage from '../../assets/images/im-montana800.webp';
import handsImage from '../../assets/images/im-manos800.webp';
import girlsImage from '../../assets/images/im-chicas800.webp';

import logoImage from '../../assets/logos/logoAxudi-bigblue.svg';
import bracketTop from '../../assets/logos/logoAxudi-ladoizq.svg';
import bracketBottom from '../../assets/logos/logoAxudi-ladodrch.svg';

import starBlue from '../../assets/icons/i-starblue.svg';
import starWhite from '../../assets/icons/i-starwhite.svg';
import arrowBlue from '../../assets/icons/i-arrowblue.svg';

import './Hero.scss';

// Secuencia de imágenes iniciales del hero antes de mostrar el logo.
const heroSlides = [
  { id: 'points-1', image: pointsImage, isLogo: false },
  { id: 'points-2', image: pointsImage, isLogo: false },
  { id: 'mountain', image: mountainImage, isLogo: false },
  { id: 'hands', image: handsImage, isLogo: false },
  { id: 'girls', image: girlsImage, isLogo: false },
  { id: 'logo', image: logoImage, isLogo: true },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isLogoSlide = heroSlides[currentSlide].isLogo;

  // Avanza automáticamente por las imágenes hasta llegar al logo final.
  useEffect(() => {
    if (currentSlide === heroSlides.length - 1) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setCurrentSlide((current) => current + 1);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [currentSlide]);

  return (
    <section
      className="hero"
      id="inicio"
    >

      {/* Título principal accesible sin alterar el diseño visual del hero. */}
      <h1 className="visually-hidden">
        AXUDI - Asociación Xuvenil de Diabetes
      </h1>

      {/* Elementos decorativos del fondo. */}
      <div
        className="hero__decorations"
        aria-hidden="true"
      >
        <img
          className="hero__star"
          src={starBlue}
          alt=""
          decoding="async"
        />
      </div>

      {/* Acceso rápido hacia la primera sección de contenido. */}
      <a
        className="hero__arrow-link"
        href="#que-hacemos"
        aria-label="Ir a la sección Qué hacemos"
      >
        <img
          className="hero__arrow"
          src={arrowBlue}
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      </a>

      {/* Imagen central animada con brackets de marca. */}
      <div
        className={`hero__visual ${isLogoSlide ? 'hero__visual--logo' : ''}`}
        aria-hidden="true"
      >

        <img
          className="hero__bracket hero__bracket--top"
          src={bracketTop}
          alt=""
          decoding="async"
        />

        <div className="hero__image-frame">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.id}
              className={`
                hero__image
                ${index === currentSlide ? 'hero__image--active' : ''}
                ${slide.isLogo ? 'hero__image--logo' : ''}
              `}
              src={slide.image}
              alt=""
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          ))}
        </div>

        <img
          className="hero__bracket hero__bracket--bottom"
          src={bracketBottom}
          alt=""
          decoding="async"
        />

      </div>

      {/* Frase en movimiento inferior. */}
      <div
        className="hero__marquee"
        aria-hidden="true"
      >
        <div className="hero__marquee-track">

          <span>Jóvenes que acompañan a jóvenes con diabetes</span>
          <img src={starWhite} alt="" />

          <span>Jóvenes que acompañan a jóvenes con diabetes</span>
          <img src={starWhite} alt="" />

          <span>Jóvenes que acompañan a jóvenes con diabetes</span>
          <img src={starWhite} alt="" />

          <span>Jóvenes que acompañan a jóvenes con diabetes</span>
          <img src={starWhite} alt="" />

          <span>Jóvenes que acompañan a jóvenes con diabetes</span>
          <img src={starWhite} alt="" />

          <span>Jóvenes que acompañan a jóvenes con diabetes</span>
          <img src={starWhite} alt="" />

        </div>
      </div>

    </section>
  );
}

export default Hero;
