import Section from '../Section/Section';
import TypewriterText from '../TypewriterText/TypewriterText';

import starBlueIcon from '../../assets/icons/i-starblue.svg';

import './Newsletter.scss';

function Newsletter() {
  return (
    <Section className="newsletter" id="newsletter">

      <div className="newsletter__content">

        <TypewriterText
          as="h2"
          className="newsletter__title"
          text="Newsletter"
        />

        <p className="newsletter__text">
          Recibe novedades, actividades y recursos de AXUDI directamente en tu correo.
        </p>

        <a
          className="button button--secondary newsletter__button"
          href="https://axudi.beehiiv.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Suscribirse a la newsletter de AXUDI en Beehiiv"
        >
          <img
            src={starBlueIcon}
            alt=""
            aria-hidden="true"
            className="button__icon"
            loading="lazy"
            decoding="async"
          />

          Suscribirme
        </a>

      </div>

    </Section>
  );
}

export default Newsletter;
