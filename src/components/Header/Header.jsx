import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


import menuIcon from '../../assets/icons/i-hamburgerwhite.svg';
import closeIcon from '../../assets/icons/i-cross.svg';
import starIconBlue from '../../assets/icons/i-starblue.svg';
import logo from '../../assets/logos/logoAxudi-navbarwhite.svg';
import message from '../../assets/icons/i-messagewhite.svg';
import instragram from '../../assets/icons/i-instagram.svg';
import tiktok from '../../assets/icons/i-tiktok.svg';


import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Abre o cierra el menú principal.
  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  // Permite cerrar el menú con la tecla Escape.
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

  // Cierra el menú al hacer click o tap fuera del header.
  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleOutsidePointerDown(event) {
      if (!headerRef.current?.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="header" ref={headerRef}>
      <div className="container header__container">
        {/* Botón principal de apertura/cierre del menú. */}
        <button
          className={`header__menu-button ${
            isMenuOpen ? 'header__menu-button--open' : ''
          }`}
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={toggleMenu}
        >
          <img src={menuIcon} alt="" aria-hidden="true" />
        </button>

        {/* Logo centrado que vuelve al inicio. */}
        <Link
          to="/#inicio"
          className="header__brand"
          aria-label="Ir al inicio"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="header__logo"
          />
        </Link>

        {/* CTA visible en escritorio. */}
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

        {/* Menú desplegable con navegación, llamadas a la acción y redes. */}
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
            <img src={closeIcon} alt="" aria-hidden="true" />
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

              <Link
                to="/noticias-y-eventos"
                className="header__nav-sublink"
                onClick={closeMenu}
              >
                Ver todas las noticias
              </Link>
            </li>

            <li>
              <Link to="/#newsletter" onClick={closeMenu}>
                Newsletter
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
