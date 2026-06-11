import Card from '../Card/Card';
import Reveal from '../Reveal/Reveal';
import Section from '../Section/Section';

import Mountain from '../../assets/images/im-montaña800.webp';
import Girls from '../../assets/images/im-chicas800.webp';
import Hands from '../../assets/images/im-manos800.webp';
import Meet from '../../assets/images/im-divulgacion800.webp';

import starIcon from '../../assets/icons/i-starwhite.svg';
import LogoBig from '../../assets/logos/logoAxudi-bigwhite.svg';

import './WhatWeDo.scss';

function WhatWeDo() {
  return (
    <Section
      className="what-we-do"
      id="que-hacemos"
    >

      <div
        className="what-we-do__decoration"
        aria-hidden="true"
      >
        <img
          src={starIcon}
          alt=""
        />
      </div>

      <h2 className="what-we-do__title">
        ¿Qué <br /> hacemos?
      </h2>

      <div className="what-we-do__cards">

        <Reveal delay={50}>
          <Card
            title="Acompañamiento"
            text="Creamos espacios donde hablar, escuchar y sentirse comprendido."
            image={Girls}
            alt=""
          />
        </Reveal>

        <Reveal delay={150}>
          <Card
            title="Encuentros"
            text="Organizamos actividades y encuentros sociales, formativas y de ocio para jóvenes."
            image={Mountain}
            alt=""
          />
        </Reveal>

        <Reveal delay={250}>
          <Card
            title="Divulgación"
            text="Compartimos recursos útiles e información sobre diabetes desde una mirada joven y real."
            image={Meet}
            alt=""
          />
        </Reveal>

        <Reveal delay={350}>
          <Card
            title="Comunidad"
            text="Conectamos a personas que viven situaciones similares."
            image={Hands}
            alt=""
          />
        </Reveal>

      </div>

      <div
        className="what-we-do__logo"
        aria-hidden="true"
      >
        <img
          src={LogoBig}
          alt=""
        />
      </div>

    </Section>
  );
}

export default WhatWeDo;