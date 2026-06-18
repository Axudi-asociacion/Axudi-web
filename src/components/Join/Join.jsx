import Section from '../Section/Section';
import TypewriterText from '../TypewriterText/TypewriterText';

import joinImage from '../../assets/images/img-camiseta800.webp';
import logoWhiteIcon from '../../assets/logos/logoAxudi-mini-white.svg';
import starBlueIcon from '../../assets/icons/i-starblue.svg';

import './Join.scss';

function Join() {
  return (
    <Section
      className="join"
      id="asociate"
    >

      {/* Texto de invitación a asociarse. */}
      <div className="join__left">

        <TypewriterText
          as="h2"
          className="join__title"
          text="Asóciate"
        />

        <p className="join__text">
          Formar parte de AXUDI es formar parte de una comunidad
          que acompaña, escucha y suma.
        </p>

      </div>

      {/* Imagen, decoración y botón hacia el formulario. */}
      <div className="join__right">

        <img
          className="join__decoration"
          src={starBlueIcon}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />

        <img
          className="join__image"
          src={joinImage}
          alt="Persona con camiseta de AXUDI"
          loading="lazy"
          decoding="async"
        />

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf0qofoR0gQOs6ht-dMc1plXF_rQpLtrJ1SHdwWauSuoxs0cg/viewform?pli=1"
        className="button button--primary join__button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir formulario de asociación en Google Forms"
      >
        <img
          src={logoWhiteIcon}
          alt=""
          aria-hidden="true"
          className="button__icon"
          loading="lazy"
          decoding="async"
        />

        Ir al formulario
      </a>
      </div>


    </Section>
  );
}

export default Join;
