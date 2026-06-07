import Card from '../Card/Card';
import Section from '../Section/Section';

import groupBg from '../../assets/images/im-groupbig.webp';


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

      <div className="about__intro">

        <div className="about__image-wrapper">
          <img
            className="about__image about__image--background"
            src={groupBg}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="about__content">

          <h2 className="about__title">
            ¿Quiénes somos?
          </h2>

          <p className="about__text">
            AXUDI es una asociación juvenil sin ánimo de lucro creada
            por y para jóvenes con diabetes.
          </p>

        </div>

      </div>

      <div className="about__team">

        <h3 className="about__team-title">
          Nuestro equipo
        </h3>

        <div className="about__cards">

          <Card
            title="Yes"
            text="Secretaria"
            image={yesImage}
            alt="Yes - Secretaria"
          />

          <Card
            title="Alba"
            text="Presidenta"
            image={albaImage}
            alt="Alba - Presidenta"
          />

          <Card
            title="Pablo"
            text="Tesorero"
            image={pabloImage}
            alt="Pablo - Tesorero"
          />

        </div>

      </div>

    </Section>
  );
}

export default About;