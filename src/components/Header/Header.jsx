import { Link } from 'react-router-dom';
// import './Header.scss';

function Header() {
  return (
    <header className="header">

      {/* Logo */}

      <Link
        to="/"
        className="header__brand"
        aria-label="Ir a la página de inicio"
      >
        <div className="header__logo"></div>

        <span className="header__name">
          AXUDI
        </span>
      </Link>


      {/* Menú */}

      <div className="header__menu">

        <button
          className="header__menu-button"
          aria-label="Abrir menú"
        >
          Menú
        </button>

        <nav
          className="header__nav"
          aria-label="Navegación principal"
        >
          <ul className="header__list">

            <li>
              <a href="#que-hacemos">
                Qué hacemos
              </a>
            </li>

            <li>
              <a href="#quienes-somos">
                Quiénes somos
              </a>
            </li>

            <li>
              <Link to="/noticias-y-eventos">
                Noticias y eventos
              </Link>
            </li>

            <li>
              <a href="#contacto">
                Contacto
              </a>
            </li>

          </ul>
        </nav>

      </div>


      {/* CTA */}

      <a
        href="#asociate"
        className="header__cta"
      >
        Asóciate
      </a>

    </header>
  );
}

export default Header;