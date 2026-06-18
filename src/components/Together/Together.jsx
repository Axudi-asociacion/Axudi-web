import togetherBg from '../../assets/images/im-juntosbig.webp';
import bracketTop from '../../assets/logos/logoAxudi-ladoizq.svg';
import bracketBottom from '../../assets/logos/logoAxudi-ladodrch.svg';
import Reveal from '../Reveal/Reveal';

import './Together.scss';

function Together() {
  return (
    // Sección full-screen con frase editorial sobre imagen de fondo.
    <section
      className="together"
      aria-labelledby="together-title"
    >
      <div
        className="together__background"
        style={{ backgroundImage: `url(${togetherBg})` }}
      >
        <div className="together__overlay">

          {/* Brackets decorativos alrededor del mensaje. */}
          <div
            className="together__decoration"
            aria-hidden="true"
          >
            <Reveal delay={80}>
              <img
                className="together__bracket together__bracket--top"
                src={bracketTop}
                alt=""
              />
            </Reveal>

            <Reveal delay={180}>
              <img
                className="together__bracket together__bracket--bottom"
                src={bracketBottom}
                alt=""
              />
            </Reveal>
          </div>

          {/* Mensaje principal de la sección. */}
          <Reveal delay={280}>
            <blockquote
              id="together-title"
              className="together__title"
            >
              Juntos cambiamos la forma de vivir con diabetes
            </blockquote>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default Together;
