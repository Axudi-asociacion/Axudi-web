import Section from '../Section/Section';

// import './Together.scss';

function Together() {
  return (
    <Section className="together">

      <div className="together__overlay">

        <div
          className="together__decoration"
          aria-hidden="true"
        ></div>

        <blockquote className="together__title">
          Juntos cambiamos la forma de vivir con diabetes
        </blockquote>

      </div>

    </Section>
  );
}

export default Together;