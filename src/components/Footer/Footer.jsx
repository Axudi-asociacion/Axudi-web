import { Link } from 'react-router-dom';
import './Footer.scss';

import logoAxudi from '../../assets/logos/logoAxudi-mediumwhite.svg';

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

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
              Asociación juvenil para jóvenes con diabetes.
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
                <a href="/">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#que-hacemos">
                  Qué hacemos
                </a>
              </li>

              <li>
                <a href="#asociate">
                  Asóciate
                </a>
              </li>

              <li>
                <a href="/noticias-y-eventos">
                  Noticias y eventos
                </a>
              </li>

              <li>
                <a href="#contacto">
                  Contacto
                </a>
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

    </footer>
  );
}

export default Footer;