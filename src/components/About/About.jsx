import Card from '../Card/Card';
import Section from '../Section/Section';

import groupBg from '../../assets/images/im-groupbig.webp';

import Reveal from '../Reveal/Reveal';


import pabloImage from '../../assets/images/im-Pablo800.webp';
import yesImage from '../../assets/images/im-Yes800.webp';
import albaImage from '../../assets/images/im-Alba800.webp';

import './About.scss';

function About() {
  return (
    <Section
      className="about"
      id="quienes-somos"
    >

      {/* Bloque introductorio con imagen de fondo y texto de presentación. */}
      <div className="about__intro">

        <div className="about__image-wrapper">
          <img
            className="about__image about__image--background"
            src={groupBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about__content">

          <h2 className="about__title">
            ¿Quiénes <br></br> somos?
          </h2>

          <p className="about__text">
            AXUDI es una asociación juvenil sin ánimo de lucro creada
            por y para jóvenes con diabetes.
          </p>

        </div>

      </div>

      {/* Tarjetas del equipo de AXUDI. */}
      <div className="about__team">

        <h3 className="about__team-title">
          Nuestro equipo
        </h3>

        <div className="about__cards">

<Reveal delay={0}>
  <Card
    title="Yes"
    text="Secretaria"
    image={yesImage}
    alt="Retrato de Yes"
  />
</Reveal>

<Reveal delay={150}>
  <Card
    title="Alba"
    text="Presidenta"
    image={albaImage}
    alt="Retrato de Alba"
  />
</Reveal>

<Reveal delay={300}>
  <Card
    title="Pablo"
    text="Tesorero"
    image={pabloImage}
    alt="Retrato de Pablo"
  />
</Reveal>

        </div>

      </div>

    </Section>
  );
}

export default About;
