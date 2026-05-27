import Section from '../Section/Section';

// import './Join.scss';

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

        <div className="join__decoration"></div>

        <div
          className="join__image"
          aria-hidden="true"
        ></div>

        <a
          href="#formulario"
          className="join__button"
          aria-label="Ir al formulario de asociación"
        >
          Ir al formulario
        </a>

      </div>

    </Section>
  );
}

export default Join;