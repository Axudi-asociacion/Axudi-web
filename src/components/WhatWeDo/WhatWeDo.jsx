import Card from '../Card/Card';
import Section from '../Section/Section';

// import './WhatWeDo.scss';

function WhatWeDo() {
  return (
    <Section
      className="what-we-do"
      id="que-hacemos"
    >

      <div
        className="what-we-do__decoration"
        aria-hidden="true"
      ></div>

      <div
        className="what-we-do__logo"
        aria-hidden="true"
      ></div>

      <h2 className="what-we-do__title">
        ¿Qué hacemos?
      </h2>

      <div className="what-we-do__cards">

        <Card
          title="Acompañamiento"
          text="Creamos espacios donde hablar, escuchar y sentirse comprendido."
          image=""
          alt=""
        />

        <Card
          title="Actividades"
          text="Organizamos actividades y encuentros sociales, formativas y de ocio para jóvenes."
          image=""
          alt=""
        />

        <Card
          title="Información"
          text="Compartimos recursos útiles y divulgación sobre diabetes desde una mirada joven y real."
          image=""
          alt=""
        />

        <Card
          title="Comunidad"
          text="Conectamos a personas que viven situaciones similares."
          image=""
          alt=""
        />

      </div>

    </Section>
  );
}

export default WhatWeDo;