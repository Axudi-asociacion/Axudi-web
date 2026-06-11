import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import menuIcon from '../../assets/icons/i-hamburgerwhite.svg';
import starIconBlue from '../../assets/icons/i-starblue.svg';
import logo from '../../assets/logos/logoAxudi-navbarwhite.svg';
import message from '../../assets/icons/i-messagewhite.svg';
import instragram from '../../assets/icons/i-instagram.svg';
import tiktok from '../../assets/icons/i-tiktok.svg';


import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="header">
      <div className="container header__container">
        <button
          className="header__menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={toggleMenu}
        >
          <img src={menuIcon} alt="" aria-hidden="true" />
        </button>

        <Link
          to="/#inicio"
          className="header__brand"
          aria-label="Ir al inicio"
          onClick={closeMenu}
        >
          <img src={logo} alt="AXUDI" className="header__logo" />
        </Link>

<Link
  to="/#asociate"
  className="button button--secondary header__cta"
  id="button__asociate"
  onClick={closeMenu}
>
          <img
            src={starIconBlue}
            alt=""
            aria-hidden="true"
            className="button__icon"
          />
          Asóciate
        </Link>

        <nav
          id="main-menu"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          <button
            className="header__close-button"
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            ×
          </button>

          <ul className="header__nav-list">
            <li>
              <Link to="/#inicio" onClick={closeMenu}>
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/#que-hacemos" onClick={closeMenu}>
                ¿Qué hacemos?
              </Link>
            </li>

            <li>
              <Link to="/#quienes-somos" onClick={closeMenu}>
                Conoce al equipo
              </Link>
            </li>

            <li>
              <Link to="/#colaboradores" onClick={closeMenu}>
                Colaboradores
              </Link>
            </li>

            <li>
              <Link to="/#noticias" onClick={closeMenu}>
                Noticias y eventos
              </Link>
            </li>

            <li className="header__nav-associate">
  <Link
    to="/#asociate"
    className="button button--secondary header__nav-associate-button"
    onClick={closeMenu}
  >
    <img
      src={starIconBlue}
      alt=""
      aria-hidden="true"
      className="button__icon"
    />

    Asóciate
  </Link>
</li>

            <li className="header__nav-contact">
              <Link
                to="/#contacto"
                className="button button--primary header__nav-contact-button"
                onClick={closeMenu}
              >
                <img
                  src={message}
                  alt=""
                  aria-hidden="true"
                  className="button__icon"
                />
                Contacto
              </Link>
            </li>
          </ul>
          <div className="header__socials">

  <div className="header__socials-divider" />

  <div className="header__socials-links">

    <a
      href="https://www.instagram.com/axudi_asturias/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram de AXUDI"
    >
      <img
        src={instragram}
        alt=""
        aria-hidden="true"
      />
    </a>

    <a
      href="https://www.tiktok.com/@axudi_asturias"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok de AXUDI"
    >
      <img
        src={tiktok}
        alt=""
        aria-hidden="true"
      />
    </a>

  </div>

</div>
        </nav>
      </div>
    </header>
  );
}

export default Header;