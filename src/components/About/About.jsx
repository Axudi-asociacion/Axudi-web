import Card from '../Card/Card';
//import './About.scss';

function About() {
  return (
    <section className="about" id="quienes-somos">

      <div className="about__content">
        <h2 className="about__title">¿Quiénes somos?</h2>

        <p className="about__text">
          AXUDI es una asociación juvenil sin ánimo de lucro creada
          por y para jóvenes con diabetes.
        </p>
      </div>

      <div className="about__team">

        <h3 className="about__team-title">
          Nuestro equipo
        </h3>

        <div className="about__cards">

          <Card
            title="Yes"
            text="Secretaria"
            image=""
            alt="Yes - Secretaria"
          />

          <Card
            title="Alba"
            text="Presidenta"
            image=""
            alt="Alba - Presidenta"
          />

          <Card
            title="Pablo"
            text="Tesorero"
            image=""
            alt="Pablo - Tesorero"
          />

        </div>

      </div>

    </section>
  );
}

export default About;