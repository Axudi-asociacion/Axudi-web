import Section from '../Section/Section';

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

      <div className="join__left">

        <h2 className="join__title">
          Asóciate
        </h2>

        <p className="join__text">
          Formar parte de AXUDI es formar parte de una comunidad
          que acompaña, escucha y suma.
        </p>

      </div>

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
        href="#formulario"
        className="button button--primary join__button"
        aria-label="Ir al formulario de asociación"
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
