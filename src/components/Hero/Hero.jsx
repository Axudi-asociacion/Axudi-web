import { useEffect, useState } from 'react';

import pointsImage from '../../assets/images/im-points800.webp';
import mountainImage from '../../assets/images/im-montaña800.webp';
import handsImage from '../../assets/images/im-manos800.webp';
import girlsImage from '../../assets/images/im-chicas800.webp';

import logoImage from '../../assets/logos/logoAxudi-bigblue.svg';
import bracketTop from '../../assets/logos/logoAxudi-ladoizq.svg';
import bracketBottom from '../../assets/logos/logoAxudi-ladodrch.svg';

import starBlue from '../../assets/icons/i-starblue.svg';
import starWhite from '../../assets/icons/i-starwhite.svg';
import arrowBlue from '../../assets/icons/i-arrowblue.svg';

import './Hero.scss';

const heroSlides = [
  { id: 'points', image: pointsImage, isLogo: false },
  { id: 'points', image: pointsImage, isLogo: false },
  { id: 'mountain', image: mountainImage, isLogo: false },
  { id: 'hands', image: handsImage, isLogo: false },
  { id: 'girls', image: girlsImage, isLogo: false },
  { id: 'logo', image: logoImage, isLogo: true },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className="hero" id="inicio">

      <div className="hero__decorations" aria-hidden="true">
        <img
          className="hero__star"
          src={starBlue}
          alt=""
        />
      </div>

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
        />
      </a>

      <div className="hero__visual" aria-hidden="true">

        <img
          className="hero__bracket hero__bracket--top"
          src={bracketTop}
          alt=""
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
            />
          ))}
        </div>

        <img
          className="hero__bracket hero__bracket--bottom"
          src={bracketBottom}
          alt=""
        />

      </div>

      <div className="hero__marquee" aria-hidden="true">
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