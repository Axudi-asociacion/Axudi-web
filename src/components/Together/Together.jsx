import togetherBg from '../../assets/images/im-juntosbig.webp';
import bracketTop from '../../assets/logos/logoAxudi-ladoizq.svg';
import bracketBottom from '../../assets/logos/logoAxudi-ladodrch.svg';

import './Together.scss';

function Together() {
  return (
    <section
      className="together"
      aria-labelledby="together-title"
    >
      <div
        className="together__background"
        style={{ backgroundImage: `url(${togetherBg})` }}
      >
        <div className="together__overlay">

          <div
            className="together__decoration"
            aria-hidden="true"
          >
            <img
              className="together__bracket together__bracket--top"
              src={bracketTop}
              alt=""
            />

            <img
              className="together__bracket together__bracket--bottom"
              src={bracketBottom}
              alt=""
            />
          </div>

          <blockquote
            id="together-title"
            className="together__title"
          >
            Juntos cambiamos la forma de vivir con diabetes
          </blockquote>

        </div>
      </div>
    </section>
  );
}

export default Together;