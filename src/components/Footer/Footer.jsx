import { Link } from 'react-router-dom';
import './Footer.scss';

import logoAxudi from '../../assets/logos/logoAxudi-mediumwhite.svg';
import starWhite from '../../assets/icons/i-starwhite.svg';

const footerMarqueeItems = [
  'AXUDI',
  'Jóvenes con diabetes',
  'Comunidad',
  'Apoyo',
  'Actividades',
];

function Footer({ reveal = false }) {
  function renderMarqueeGroup(groupIndex) {
    return footerMarqueeItems.map((item) => (
      <span
        className={`footer__marquee-item ${
          item === 'AXUDI' ? 'footer__marquee-item--brand' : ''
        }`}
        key={`${groupIndex}-${item}`}
      >
        {item}

        <img
          src={starWhite}
          alt=""
          aria-hidden="true"
        />
      </span>
    ));
  }

  return (
    <footer className={`footer ${reveal ? 'footer--reveal' : ''}`}>

      <div className="container">

        {/* Bloque superior con marca, navegación y redes. */}
        <div className="footer__top">

          <div className="footer__brand">

            <div className="footer__logo">
                    <img
                className="logo"
                src={logoAxudi}
                alt=""
                aria-hidden="true"
              />
            </div>

            <p className="footer__description">
              Asociación juvenil para <br></br>jóvenes con diabetes.
            </p>

          </div>

          <nav
            className="footer__nav"
            aria-label="Navegación del footer"
          >

            <h3 className="footer__subtitle">
              Nuestra web :)
            </h3>

            <ul className="footer__list">

              <li>
                <Link to="/#inicio">
                  Inicio
                </Link>
              </li>

              <li>
                <Link to="/#que-hacemos">
                  Qué hacemos
                </Link>
              </li>

              <li>
                <Link to="/#asociate">
                  Asóciate
                </Link>
              </li>

              <li>
                <Link to="/noticias-y-eventos">
                  Noticias y eventos
                </Link>
              </li>

              <li>
                <Link to="/#contacto">
                  Contacto
                </Link>
              </li>

            </ul>

          </nav>

          <div className="footer__social">

            <h3 className="footer__subtitle">
              Síguenos
            </h3>

            <ul className="footer__list">

              <li>
                <a
                  href="https://www.instagram.com/axudi_asturias/"
                  aria-label="Instagram de AXUDI"
                >
                  Instagram
                </a>
              </li>
                            <li>
                <a
                  href="https://www.tiktok.com/@axudi_asturias"
                  aria-label="Tiktok de AXUDI"
                >
                  Tiktok
                </a>
              </li>


            </ul>

          </div>

        </div>

        {/* Enlaces legales. */}
        <div className="footer__legal">

          <ul className="footer__legal-list">

            <li>
              <Link to="/aviso-legal">
                Aviso legal
              </Link>
            </li>

            <li>
              <Link to="/privacidad">
                Política de privacidad
              </Link>
            </li>

            <li>
              <Link to="/cookies">
                Política de cookies
              </Link>
            </li>

            <li>
              <Link to="/configurar-cookies">
                Configurar cookies
              </Link>
            </li>

          </ul>

        </div>

        {/* Copyright y crédito de autoría. */}
        <div className="footer__bottom">

          <p className="footer__copy">
            © 2026 AXUDI. Todos los derechos reservados.
          </p>
<p className="footer__credits">
  Web creada por{' '}
  <a
    href="https://www.linkedin.com/in/cristina-en-orbita"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Perfil de LinkedIn de Cristina en Órbita"
  >
    Cristina en Órbita
  </a>
</p>

        </div>

      </div>

      {/* Texto final en movimiento que cierra el footer. */}
      <div
        className="footer__marquee"
        aria-label="AXUDI, jóvenes con diabetes, comunidad, apoyo y actividades"
      >
        <div className="footer__marquee-track">
          <div className="footer__marquee-group">
            {renderMarqueeGroup(1)}
          </div>

          <div
            className="footer__marquee-group"
            aria-hidden="true"
          >
            {renderMarqueeGroup(2)}
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
